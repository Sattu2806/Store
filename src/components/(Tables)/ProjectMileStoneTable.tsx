import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Card } from '../ui/card';
import { useQuery } from 'react-query';
import { ProjectMileStone, ProjectMileStoneInfo } from '@prisma/client';
import axios from 'axios';
import { Skeleton } from '../ui/skeleton';

interface ProjectMil extends ProjectMileStone {
    data:ProjectMileStone,
    ProjectMileStoneInfo:ProjectMileStoneInfo[]
}

const ProjectMileStoneTable = () => {

    const {data: ProjectMileStoneData = [], error: ProjectMileStoneDatanError, isLoading: isProjectMileStoneDataLoading, refetch:refetchProjectMileStoneData} = useQuery<ProjectMil[]>({
        queryKey:'activtyData',
        queryFn: ()=> axios.get('/api/projectmilestone').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3
    })
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];

    if(!ProjectMileStoneData){
        return (
          <Skeleton/>
        )
      }

    const uniqueYears = Array.from(new Set(ProjectMileStoneData.flatMap(item => item.ProjectMileStoneInfo.map(info => info.year))));

  return (
    <div className="w-full col-span-2">
      <Card className="p-4 w-full">
        <p className="text-xl font-semibold my-2 text-center">
          Project Milestone Table
        </p>
        <Table>
          <TableCaption>Project Milestone Table</TableCaption>
          <TableHeader>
            <TableRow>
                <TableHead>Description</TableHead>
                {uniqueYears.map((year,index) => {
                    return(
                        months.map((month,month_index) => (
                            <TableHead key={month_index}>{month}-{year?.toString().slice(2)}</TableHead>
                        ))
                    )
                })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ProjectMileStoneData.map((data,index) => (
                <TableRow key={index}>
                    <TableCell>{data.description}</TableCell>
                    {uniqueYears.map((year,index) => {
                        return(
                            months.map((month,month_index) => {
                                const matchedInfo = data.ProjectMileStoneInfo.find(info => info.year === year && info.month === month_index);
                                return(
                                    <>
                                    {matchedInfo ? (
                                        <TableCell key={month_index} className='bg-blue-400' style={{left:`${matchedInfo.barleftposition}`, width:`${matchedInfo.barwidth}`}}></TableCell>
                                    ):(
                                        <TableCell></TableCell>
                                    )}
                                    </>
                                )
                            })
                        )
                    })}
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default ProjectMileStoneTable;