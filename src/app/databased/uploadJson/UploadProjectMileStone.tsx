'use client'
import React, { useState, useRef, useEffect } from 'react';
import CodeBlock from '@/components/codeblock';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {FiUpload} from "react-icons/fi"
import {  ProjectMileStone } from '@prisma/client';
import { useToast } from '@/components/ui/use-toast';
import FileUploadComponent from './CommonUpload';

type Props = {};

const UploadProjectMileStone = (props: Props) => {
  const jsonFileInputRef = useRef<HTMLInputElement | null>(null);
  const [jsonContent, setJsonContent] = useState<string | null>(null);
  const [startUploading, setStartUpload] = useState<boolean>(false)
  const [completeUploading, setCompleteUploading] = useState<boolean>(false)
  const [base_url, setbase_url] = useState('')
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [Error,setError] = useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()

  const getDaysInMonth =(date: Date) => {
    const year = new Date(date).getFullYear();
    const month = new Date(date).getMonth();
    const lastDay = new Date(year, month + 1, 0);
    return lastDay.getDate();
  }

  const getMonthsBetweenDates = (start: Date | null | undefined, end: Date | null | undefined) => {
      const months = [];
  
      if (start && end) {
          let currentDate = new Date(start);
  
          while (
              currentDate.getFullYear() < new Date (end).getFullYear() ||
              (currentDate.getFullYear() === new Date (end).getFullYear() && currentDate.getMonth() <= new Date (end).getMonth())
          ) {
              const year = currentDate.getFullYear();
              const month = currentDate.getMonth();
              months.push({ year, month });
              currentDate = new Date(currentDate);
              currentDate.setMonth(currentDate.getMonth() + 1);
          }
      }
  
      return months;
  };


  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const file = target.files?.[0];

    if (file) {
      const fileContent = await file.text();
      try {
        const parsedData : ProjectMileStone[] = JSON.parse(fileContent);
        const newData = parsedData.map((data)=>{
        const PlanStartDate = data.startDate
        const PlanEndDate = data.endDate
        if(PlanStartDate && PlanEndDate){
        const days = Math.floor((new Date(PlanEndDate).getTime() - new Date(PlanStartDate).getTime()) / (1000 * 60 * 60 * 24))
        const dates = getMonthsBetweenDates(data.startDate, data.endDate)
        const updateddateswithdata = dates.map((date) => {
        if(date.month === new Date(PlanStartDate).getMonth() && date.month === new Date(PlanEndDate).getMonth()){
          const differenceinDays = Math.floor((new Date(PlanEndDate).getTime() - new Date(PlanStartDate).getTime()) / (1000 * 60 * 60 * 24));
          const daysInPlannedMonth = getDaysInMonth(PlanStartDate);
          const same_satrt_Month = new Date(new Date(PlanStartDate).getFullYear(), new Date(PlanStartDate).getMonth(), 1);
          const position_days = Math.floor((new Date(PlanStartDate).getTime() - same_satrt_Month.getTime()) / (1000 * 60 * 60 * 24));
          const barwidth = ((differenceinDays) / daysInPlannedMonth) * 100
          const barleftposition = ((position_days + 1 )/daysInPlannedMonth)*100
          return {...date, barwidth, barleftposition}
        }
        if(date.month === new Date(PlanStartDate).getMonth() && date.month !== new Date(PlanEndDate).getMonth()){
          const same_next_Month = new Date(new Date(PlanStartDate).getFullYear(), new Date(PlanStartDate).getMonth() + 1, 0);
          const same_satrt_Month = new Date(new Date(PlanStartDate).getFullYear(), new Date(PlanStartDate).getMonth(), 1);
          const position_days = Math.floor((new Date(PlanStartDate).getTime() - same_satrt_Month.getTime()) / (1000 * 60 * 60 * 24));
            const differenceinDays = Math.floor((new Date(same_next_Month).getTime() - new Date(PlanStartDate).getTime()) / (1000 * 60 * 60 * 24));
            const daysInPlannedMonth = getDaysInMonth(PlanStartDate);
            const barwidth = ((differenceinDays + 1) / daysInPlannedMonth) * 100
            const barleftposition = ((position_days + 1 )/daysInPlannedMonth)*100
            return {...date, barwidth, barleftposition}
        }
        if(date.month !== new Date(PlanStartDate).getMonth() && date.month === new Date(PlanEndDate).getMonth()){
          const same_end_Month = new Date(new Date(PlanEndDate).getFullYear(), new Date(PlanEndDate).getMonth(), 1);
            const differenceinDays = Math.floor((new Date(PlanEndDate).getTime() - new Date(same_end_Month).getTime()) / (1000 * 60 * 60 * 24));
            const daysInPlannedMonth = getDaysInMonth(PlanEndDate);
            const barwidth = ((differenceinDays) / daysInPlannedMonth) * 100
            const barleftposition = 0
            return {...date, barwidth, barleftposition}
        }
        if(date.month !== new Date(PlanStartDate).getMonth() && date.month !== new Date(PlanEndDate).getMonth()){
            const barwidth = 100
            const barleftposition = 0
            return {...date, barwidth, barleftposition}
        }
      })
      return {...data, updateddateswithdata, days}
    }
    })
        setJsonContent(JSON.stringify(newData, null, 2));
        console.log('Parsed JSON data:', parsedData);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        setJsonContent(null);
        console.log(jsonContent);
        setError(true);
      }
    }
  };


  const PostData = async () => {
    try {
      if (!jsonContent) {
        toast({
            variant: "destructive",
            description: "No JSON content to post.",
        })
        return;
      }

      const parsedJsonContent = JSON.parse(jsonContent);
      if (!Array.isArray(parsedJsonContent)) {
        toast({
            variant: "destructive",
            description: "Invalid JSON content. Expected an array of questions.",
        })
        return;
      }

      const totalData = parsedJsonContent.length;
      let uploadeddata = 0;

      setStartUpload(true)

      await Promise.all(
        parsedJsonContent.map(async (data: any) => {
          try {
            const response = await axios.post('/api/uploadJson', {
              description:data.description,
              startDate:data.startDate,
              endDate:data.endDate,
              ProjectMileStoneInfo: data.updateddateswithdata
            },
            {
              headers: {
                  'Content-Type': 'application/json',
                  'Type':'ProjectMileStone'
              },
            } 
            );

            console.log(response.data)

            uploadeddata++;
            setUploadProgress((uploadeddata / totalData) * 100);
            setJsonContent(null);
            toast({
                variant:'default',
                description: "data uploaded successfully!",
            })
          } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh! Something went wrong.",
                description: "Error uploading data",
            })
          }
        })
      );
      setCompleteUploading(true)
      setTimeout(() => {
        window.location.reload()
      }, 6000);
    } catch (error) {
      console.error('Error saving form data:', error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "An error occurred while processing the JSON content.",
      })
    }
  };
  return (
    <FileUploadComponent label='Project MileStone' PostData={PostData} handleFileChange={handleFileChange} jsonContent={jsonContent} startUploading={startUploading} uploadProgress={uploadProgress} />
  );
};

export default UploadProjectMileStone
