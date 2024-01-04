import React from 'react';
import { ProjectMileStone } from '@/lib/data/formdata';
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

const generateDateRange = (start:string, end:string) => {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const dateRange = [];
  let currentDate = startDate;

  while (currentDate <= endDate) {
    dateRange.push(new Date(currentDate));
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateRange;
};

const calculateCellWidth = (start:string, end:string, index1:number) => {
  const startDate = new Date(start);
  const endDate = new Date(end);

  // Calculate the total days in the month
  const daysInMonth = new Date(
    startDate.getFullYear(),
    startDate.getMonth() + 1,
    0
  ).getDate();

  // Calculate the overlap days in the current month
  const overlapDays = Math.min(
    endDate.getDate(),
    daysInMonth + 1 - startDate.getDate()
  );

  // Calculate the width of the bar as a percentage
  const widthPercentage = (overlapDays / daysInMonth) * 100;

  return widthPercentage;
};

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const ProjectMileStoneTable = () => {
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
              {months.map((month, index) => (
                <TableHead key={index}>{month}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {ProjectMileStone.map((data, index) => (
              <TableRow key={index}>
                <TableCell>{data.description}</TableCell>
                {months.map((month, index1) => {
                  const dateRange = generateDateRange(
                    data.startDate,
                    data.endDate
                  );
                  const isInRange = dateRange.some(
                    (date) => date.getMonth() === index1
                  );

                  return (
                    <TableCell
                      key={index1}
                      style={{
                        background: isInRange
                          ? `linear-gradient(90deg, #68D391 ${calculateCellWidth(
                              data.startDate,
                              data.endDate,
                              index1
                            )}%, transparent ${calculateCellWidth(
                              data.startDate,
                              data.endDate,
                              index1
                            )}%)`
                          : '',
                      }}
                    ></TableCell>
                  );
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