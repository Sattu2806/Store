'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {FiUpload} from "react-icons/fi"
import { useToast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CodeBlock from '@/components/codeblock';
import { Progress } from "@/components/ui/progress"



type Props = {};

const UploadTotalQuantity = (props: Props) => {
  const [jsonContent, setJsonContent] = useState<string | null>(null);
  const [startUploading, setStartUpload] = useState<boolean>(false)
  const [completeUploading, setCompleteUploading] = useState<boolean>(false)
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [Error,setError] = useState<boolean>(false)
  const { toast } = useToast()


  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const file = target.files?.[0];

    if (file) {
      const fileContent = await file.text();
      try {
        const parsedData = JSON.parse(fileContent);
        setJsonContent(JSON.stringify(parsedData, null, 2));
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
            const response = await axios.post('/api/uploadtotalquantity', {
                groupId:data.groupId,
                categoryId:data.categoryId,
                foundationType:data.FoundationType,
                totalFoundations: data.TotalFoundatios,
                excavationQty: data.Excavation_Qty,
                rebarQty: data.Rebar_Qty,
                concreteQty: data.Concrete_Qty
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
    <div className='h-[200px] relative'>
      <div className='mt-2'>
      <Input
        className='cursor-pointer hidden'
        type="file"
        name="jsonFile"
        id="jsonFileInput"
        onChange={handleFileChange}
        accept=".json"
      />
      {startUploading === true && (
        <div className=''>
          <Progress className='w-1/2 mx-auto mt-2' value={uploadProgress} />
        </div>
        )}
      {!jsonContent && (
        <label
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] px-4 py-3 flex items-center justify-between space-x-2 text-[14px] border-neutral-800 border-[1px] text-neutral-800 font-medium rounded-lg cursor-pointer"
            htmlFor="jsonFileInput"
        >
            <span>
            Upload Total Quantity Data
            </span>
            <FiUpload/>
        </label>
      )}
      {jsonContent &&  (
        <Button size='lg' onClick={PostData}>
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

export default UploadTotalQuantity
