'use client'
import React from 'react'
import { data } from './data'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Card } from '@/components/ui/card'

type Props = {}

const AccordianComponent = (props: Props) => {

    // Assuming data is of type DataItem[]
    const uniqueHeadings = Array.from(new Set(data.map(item => item.Heading)));
    const newData = uniqueHeadings.map(heading => {
        const filteredItems = data.filter(item => item.Heading === heading);

        const descriptionsWithWeight = filteredItems.map(item => ({
            Description: item.Description,
            Weight: item.Weight 
        }));

        return {
            Heading: heading,
            Descriptions: descriptionsWithWeight
        };
    })

    return (
    <Card className='w-9/12 mx-auto my-6'>
        <h1 className='text-xl text-center font-semibold py-4 bg-gray-50 rounded-t-xl mb-2'>Detailed Micro-Level Activities Breakdown in the Work Breakdown Structure (W. B. S)</h1>
        <Accordion type="single" collapsible className="w-full px-10">
            {newData.map ((item, index) => (
            <AccordionItem key={index} value={index.toString()}>
                <AccordionTrigger className='text-xl hover:no-underline hover:text-blue-500 hover:bg-gray-50 px-3 hover:border-[2px] rounded border-sky-100'  >{item.Heading}</AccordionTrigger>
                <AccordionContent className='text-lg flex items-center justify-between space-x-4 border-b-[1.5px] border-blue-200 px-3'>
                    <p className='font-medium text-lg'>Description</p> 
                    <p className='font-medium text-lg'>Weight</p> 
                </AccordionContent>
                {item.Descriptions.map((description, inner_index) => (
                <AccordionContent key={inner_index} className='text-lg flex items-center justify-between space-x-4 border-b-[1.5px] border-blue-200 py-2 px-3'>
                    <p>{inner_index + 1}. {description.Description}</p> 
                    <p>{description.Weight * 100} %</p> 
                </AccordionContent>
                ))}
            </AccordionItem>
            ))}
        </Accordion>
    </Card>
  )
}

export default AccordianComponent