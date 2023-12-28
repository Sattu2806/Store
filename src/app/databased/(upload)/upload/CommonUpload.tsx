// FileUploadComponent.tsx

import React, { ChangeEvent } from 'react';
import {FiUpload} from "react-icons/fi"
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import CodeBlock from '@/components/codeblock';
import { Progress } from "@/components/ui/progress"

interface FileUploadComponentProps {
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => void;
  startUploading: boolean;
  uploadProgress: number;
  jsonContent: string | null;
  PostData: () => void;
  label:string
}

const FileUploadComponent: React.FC<FileUploadComponentProps> = ({
  handleFileChange,
  startUploading,
  uploadProgress,
  jsonContent,
  PostData,
  label
}) => {
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
              {label}
            </span>
            <FiUpload />
          </label>
        )}
        {jsonContent && (
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

export default FileUploadComponent;
