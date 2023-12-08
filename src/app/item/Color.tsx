import React, { useState } from 'react';
import { GrAdd } from "react-icons/gr";
import { SketchPicker } from 'react-color';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';

interface Props {
    control: any;
    name: string;
  }

const Color: React.FC<Props> = ({control, name}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [sketchColor, setSketchColor] = useState<string>('#fff'); // State for SketchPicker
  const [selectedColors, setSelectColors] = useState<string[]>([]);
  const { getValues, setValue } = useFormContext();
  const colors = getValues(name) || [];

  console.log(colors)

  const handleColorButtonClick = () => {
    setSelectColors((prevSelectedColors) => [...prevSelectedColors, sketchColor]);
    setValue(name, [...colors, sketchColor]);
    setOpen(false);
  }

  const handleDeleteColor = (indexToDelete: number) => {
    setSelectColors((prevSelectedColors) => {
      const updateColors = [...prevSelectedColors];
      updateColors.splice(indexToDelete, 1);
      return updateColors;
    });
  }

  const handleChangeComplete = (color:any) => {
    setSketchColor(color.hex); // Update SketchPicker color
  }

  return (
    <div>
        <Label htmlFor='image' className='text-base font-medium'>
          Colors
        </Label>
      <div className='flex items-center justify-between my-1'>
        <Button variant='secondary' type='button' className='block border-[1px] rounded-lg px-3 text-[14px]'
          onClick={() => setOpen(!open)}
        >
          Choose Color
        </Button>
        {open && (
          <SketchPicker color={sketchColor} onChangeComplete={handleChangeComplete} />
        )}
        <Button type='button' className='flex items-center space-x-1 border-[1px] rounded-lg p-1 px-3 text-[14px]'
          onClick={handleColorButtonClick}
        >
          Add<GrAdd className="ml-1" size={16} />
        </Button>
      </div>
      <div className='mt-5'>
        {selectedColors.map((selectedColor, index) => (
          <div key={index} className='flex items-center space-x-4 mb-2'>
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: '100%',
                backgroundColor: selectedColor,
                display: "inline-block"
              }}
            />
            <span className='border-[1px] rounded-lg p-1 px-3 text-[14px]'>{selectedColor}</span>
            <button className='border-[1px] rounded-lg p-1 px-3 text-[14px]' type='button' onClick={() => handleDeleteColor(index)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Color;
