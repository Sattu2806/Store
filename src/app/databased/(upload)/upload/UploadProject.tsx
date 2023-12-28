'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useToast } from "@/components/ui/use-toast"
import FileUploadComponent from './CommonUpload';



type Props = {};

const UploadProjectData = (props: Props) => {
  const [jsonContent, setJsonContent] = useState<string | null>(null);
  const [startUploading, setStartUpload] = useState<boolean>(false)
  const [completeUploading, setCompleteUploading] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [Error,setError] = useState<boolean>(false)
  const { toast } = useToast()

  const getISOWeek = (date: Date): number => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() + 4 - (d.getDay() || 7));
    const yearStart: Date = new Date(d.getFullYear(), 0, 1);
    return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  };



  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const file = target.files?.[0];

    if (file) {
      const fileContent = await file.text();
      try {
        const parsedData = JSON.parse(fileContent);
        // Add WeekNumber and MonthName to each data item
        const processedData = parsedData.map((data: any) => {
          const weekNumber = getISOWeek(new Date(data.Date));
          const monthName = new Date(data.Date).toLocaleString('en', { month: 'short' });
          return {
            ...data,
            WeekNumber: weekNumber,
            MonthName: monthName,
          };
        });
        setJsonContent(JSON.stringify(processedData, null, 2));
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
            const response = await axios.post('/api/upload', {
                Discipline: data.Discipline,
                Area: data.Area,
                Date: data.Date,
                Excavation: data.Excavation,
                FormWork: data.FormWork,
                Rebar: data.Rebar,
                Concrete: data.Concrete,
                WeekNumber: data.WeekNumber,
                MonthName: data.MonthName,
            },
            {
              headers: {
                  'Content-Type': 'application/json',
                  'Type':'Project'
              },
            } 
            );

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

  useEffect(() => {
    if (Error === true) {
      setTimeout(() => {
        window.location.reload();
      }, 5000); 
    }
  }, [Error]);
  return (
    <FileUploadComponent label='Project Data' PostData={PostData} handleFileChange={handleFileChange} jsonContent={jsonContent} startUploading={startUploading} uploadProgress={uploadProgress} />
  );
};

export default UploadProjectData
