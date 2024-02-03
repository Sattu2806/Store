'use client'
import React, { useState } from 'react'
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import UploadTrade from './UploadTrade'
import UploadDailyQuantityData from './UploadDailyQunatity'
import UploadTotalQuantity from './UploadTotalQuantity'
import UploadManpowerData from './UploadManpowerData'
import UploadMonthlyData from './UploadMonthlyData'
import UploadProjectData from './UploadProject'
import UploadProjectMileStone from './UploadProjectMileStone'
import { currentRole } from '@/lib/auth'
import { UserRole } from '@prisma/client'
import { RoleGate } from '@/components/auth/role-gate'

type Props = {}

const Upload = (props: Props) => {
    const [selectedUpload, setSelectedUpload] = useState<string>('project')
    const handleUploadTypeChange = (value: string) => {
        setSelectedUpload(value);
    };

    const renderSelectedComponent = () => {
        switch (selectedUpload) {
        case 'trade':
            return <UploadTrade />;
        case 'daily':
            return <UploadDailyQuantityData />;
        case 'total':
            return <UploadTotalQuantity />;
        case 'manpower':
            return <UploadManpowerData />;
        case 'monthly':
            return <UploadMonthlyData />;
        case 'UploadProjectMileStone':
            return <UploadProjectMileStone />;
        case 'project':
        default:
            return <UploadProjectData />;
        }
    };

  return (
    <RoleGate allowedRole={UserRole.ADMIN || UserRole.SUPERADMIN}>
    <div className='max-w-[1280px] mx-auto my-4'>
        <RadioGroup className='flex items-center space-x-5 ' value={selectedUpload} onValueChange={handleUploadTypeChange} defaultValue="option-one">
        <div className="flex items-center space-x-2 ">
            <RadioGroupItem  value="project" id="project" />
            <Label htmlFor="project" className='text-xl'>Project</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="trade" id="trade" />
            <Label htmlFor="trade" className='text-xl'>Trade</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="daily" id="daily" />
            <Label htmlFor="daily" className='text-xl'>Daily</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="total" id="total" />
            <Label htmlFor="total" className='text-xl'>Total</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="manpower" id="manpower" />
            <Label htmlFor="manpower" className='text-xl'>Manpower</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="monthly" id="monthly" />
            <Label htmlFor="monthly" className='text-xl'>Monthly</Label>
        </div>
        <div className="flex items-center space-x-2">
            <RadioGroupItem value="UploadProjectMileStone" id="UploadProjectMileStone" />
            <Label htmlFor="UploadProjectMileStone" className='text-xl'>UploadProjectMileStone</Label>
        </div>
        </RadioGroup>
        {renderSelectedComponent()}
    </div>
    </RoleGate>
  )
}

export default Upload