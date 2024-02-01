import { LongLeadItem } from '@/lib/types'
import React from 'react'
import {TechnicalPR ,RFQ, ReceivedQuotation, PO, Manufacturing, FinalInspection, DeliveryToSite} from '@prisma/client'
import { Check } from 'lucide-react'
import { ScrollArea } from "@/components/ui/scroll-area"


type Props = {
    data: LongLeadItem
}


const Stepper = ({data}: Props) => {
console.log(data)

  return (
    <ScrollArea className="h-[300px] w-[350px] rounded-md border p-4">
        <StatusCells statusKey="technicalEvaluation" data={data} label='Technical Evaluation' />
        <StatusCells statusKey="prStatus" data={data} label='Purchase Requisition' />
        <StatusCells statusKey="rfqStatus" data={data} label='Quotation Request	' />
        <StatusCells statusKey="receivedQuotation" data={data} label='Quotation Evaluation' />
        <StatusCells statusKey="poStatus" data={data} label='Purchase Order' />
        <StatusCells statusKey="manufacturingStatus" data={data} label='Manufacturing ' />
        <StatusCells statusKey="finalInspection" data={data} label='Inspection' />
        <StatusCells statusKey="deliveryToSite" data={data} label='Delivery' />
    </ScrollArea>
  )
}

export default Stepper


type StatusCellsProps = {
    statusKey: string;
    data: LongLeadItem;
    label: string;
  };
  
  const StatusCells: React.FC<StatusCellsProps> = ({ statusKey, data, label }) => {
    let enumValues: string[] = [];
    let status: string | undefined;
    let shouldDisable: boolean = false;
    let createdAt: Date | undefined
    let updatedAt: Date | undefined
  
    switch (statusKey) {
      case "technicalEvaluation":
        enumValues = Object.values(TechnicalPR);
        status = data.technicalEvaluation?.status;
        createdAt = data.technicalEvaluation?.createdAt;
        updatedAt = data.technicalEvaluation?.updatedAt;
        break;
      case "prStatus":
        enumValues = Object.values(TechnicalPR);
        status = data.prStatus?.status;
        createdAt = data.prStatus?.createdAt;
        updatedAt = data.prStatus?.updatedAt;
        break;
      case "rfqStatus":
        enumValues = Object.values(RFQ);
        status = data.rfqStatus?.status;
        createdAt = data.rfqStatus?.createdAt;
        updatedAt = data.rfqStatus?.updatedAt;
        break;
      case "receivedQuotation":
        enumValues = Object.values(ReceivedQuotation);
        status = data.receivedQuotation?.status;
        createdAt = data.receivedQuotation?.createdAt;
        updatedAt = data.receivedQuotation?.updatedAt;
        break;
      case "poStatus":
        enumValues = Object.values(PO);
        status = data.poStatus?.status;
        createdAt = data.poStatus?.createdAt;
        updatedAt = data.poStatus?.updatedAt;
        break;
      case "manufacturingStatus":
        enumValues = Object.values(Manufacturing);
        status = data.manufacturingStatus?.status;
        createdAt = data.manufacturingStatus?.createdAt;
        updatedAt = data.manufacturingStatus?.updatedAt;
        break;
      case "finalInspection":
        enumValues = Object.values(FinalInspection);
        status = data.finalInspection?.status;
        createdAt = data.finalInspection?.createdAt;
        updatedAt = data.finalInspection?.updatedAt;
        break;
      case "deliveryToSite":
        enumValues = Object.values(DeliveryToSite);
        status = data.deliveryToSite?.status;
        createdAt = data.deliveryToSite?.createdAt;
        updatedAt = data.deliveryToSite?.updatedAt;
        break;
      default:
        break;
    }
  
    return (
      <div>
        {/* <Timeline>
          <TimelineEvent
            title={label}
            createdAt={updatedAt ? new Date(updatedAt).toDateString() :  ( createdAt ? new Date(createdAt).toDateString(): "")} 
            icon={<i className={`material-icons md-18 text-green-500 ${status ? "" : "hidden"}`}><Check/></i>}
            className='capitalize font-medium'
          >
            <p className='capitalize font-normal'>{status}</p>
          </TimelineEvent>
        </Timeline> */}
        <div className='flex items-center space-x-4'>
          <div className='relative flex flex-col items-center' >
          <p className={`h-[50px] w-[4px]  ${status ? "bg-green-500" : "bg-gray-400"}`}></p>
            <p className={`w-[25px] h-[25px]   flex items-center justify-center ${status ? "bg-green-500" : "border-[2px] border-neutral-300"} `}><i className={`material-icons md-18 text-green-400 p-1 ${status ? "" : "hidden"}`}><Check className='text-white'/></i></p>
            <p className={`h-[50px] w-[4px] bg-gray-400 ${status ? "bg-green-500" : "bg-gray-400"}`}></p>
          </div>
          <div className='text-sm mt-10 '>
            <p className='font-medium'>{updatedAt ? new Date(updatedAt).toDateString() :  ( createdAt ? new Date(createdAt).toDateString(): "")}</p>
            <p>{label}</p>
            <p className='capitalize font-normal bg-slate-100 px-3 py-1 rounded mt-1'>{status}</p>
          </div>
        </div>
      </div>
    );
  };
  