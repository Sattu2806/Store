'use client'
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {FiUpload} from "react-icons/fi"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CodeBlock from '@/components/codeblock';


type Props = {};

const UploadProjectData = (props: Props) => {
  const jsonFileInputRef = useRef<HTMLInputElement | null>(null);
  const [jsonContent, setJsonContent] = useState<string | null>(null);
  const [startUploading, setStartUpload] = useState<boolean>(false)
  const [completeUploading, setCompleteUploading] = useState<boolean>(false)
  const [base_url, setbase_url] = useState('')
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [Error,setError] = useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    if (jsonFileInputRef.current) {
      jsonFileInputRef.current.addEventListener('change', handleFileChange);

      return () => {
        jsonFileInputRef.current?.removeEventListener('change', handleFileChange);
      };
    }
  }, []);

  const handleFileChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const fileContent = await file.text();
      try {
        const parsedData = JSON.parse(fileContent);
        setJsonContent(JSON.stringify(parsedData, null, 2)); // Convert parsed data to a formatted JSON string
        console.log('Parsed JSON data:', parsedData);
      } catch (error) {
        console.error('Error parsing JSON file:', error);
        setJsonContent(null);
        console.log(jsonContent)
        setError(true)
      }
    }
  };

  const PostQuiz = async () => {
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
            const response = await axios.post('/api/uploadproject', {
                Discipline: data.Discipline,
                Area: data.Area,
                Date: data.Date,
                Excavation: data.Excavation,
                FormWork: data.FormWork,
                Rebar: data.Rebar,
                Concrete: data.Concrete
            });

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
    <div className='h-[200px]'>
      <div className='mt-2'>
      <Input
        className='cursor-pointer hidden'
        type="file"
        name="jsonFile"
        id="jsonFileInput"
        ref={jsonFileInputRef}
        accept=".json"
      />
      {!jsonContent && (
        <label
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-3 flex items-center justify-between space-x-2 text-[14px] border-neutral-800 border-[1px] text-neutral-800 font-medium rounded-lg cursor-pointer"
            htmlFor="jsonFileInput"
        >
            <span>
            Upload Project Data
            </span>
            <FiUpload/>
        </label>
      )}
      {jsonContent &&  (
        <Button onClick={PostQuiz}>
          Add Data
        </Button>
      )}
      <div>
        {jsonContent !== null && (
          <Card>
            <CardContent>
                <CardDescription>
                    <CodeBlock code={jsonContent} language="json" />
                </CardDescription>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
    </div>
  );
};

export default UploadProjectData
