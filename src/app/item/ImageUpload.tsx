'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-label';
import React, {useState} from 'react'
import { useFormContext } from 'react-hook-form';

interface Props {
    control: any;
    name: string;
}

const ImageUpload = ({control, name}: Props) => {
    const [files, setFiles] = useState<File[]>([]);
    const [fileUrls, setFileUrls] = useState<string[]>([]);
    const { getValues, setValue } = useFormContext();
    const images = getValues(name) || [];
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newFiles = event.target.files;
        setFiles((prevFiles) => (newFiles ? [...prevFiles, ...Array.from(newFiles)] : prevFiles));
    
        if (newFiles) {
          const newUrls = Array.from(newFiles).map((file) => URL.createObjectURL(file));
          setFileUrls((prevUrls) => [...prevUrls, ...newUrls]);
    
          setValue(name, [...images, ...newUrls]);
        }
    };
  
    const removeFile = (index: number) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    
        const newUrls = [...fileUrls];
        newUrls.splice(index, 1);
        setFileUrls(newUrls);
    
        setValue(name, newUrls);
    };
  
    console.log(images);
  
    return (
      <div>
        {fileUrls.length > 0 && (
          <div className='flex items-center justify-between gap-4'>
            {fileUrls.map((url, index) => (
              <div key={index} className='p-5 space-y-8'>
                <div className='rounded-md overflow-hidden w-full relative'>
                  <img src={url} className='w-[100px]' alt={`Uploaded File ${index}`} />
                </div>
                <Button
                  onClick={() => removeFile(index)}
                  type='button'
                  className='border rounded-md px-4 py-2 block w-full mt-4 border-gray-600 hover:opacity-60'
                >
                  Remove
                </Button>
              </div>
            ))}
          </div>
        )}
        <Label htmlFor='image' className='text-base font-medium'>
          Item Image
        </Label>
        <Input
          type='file'
          name='image'
          multiple
          id='image'
          className='my-1 cursor-pointer'
          placeholder='Upload Images'
          onChange={handleFileChange}
        />
      </div>
    );
  };
  
  export default ImageUpload;