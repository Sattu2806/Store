import { LongLeadItem } from '@/lib/types'
import React from 'react'
import {TechnicalPR ,RFQ, ReceivedQuotation, PO, Manufacturing, FinalInspection, DeliveryToSite} from '@prisma/client'
import {Timeline, TimelineEvent} from 'react-event-timeline'
import { Cross2Icon } from '@radix-ui/react-icons'
import { Check } from 'lucide-react'

type Props = {
    data: LongLeadItem
}


const Stepper = ({data}: Props) => {
console.log(data)

  return (
    <div className='max-h-[250px] w-[200px] overflow-y-auto'>
        <StatusCells statusKey="technicalEvaluation" data={data} label='Technical Evaluation' />
        <StatusCells statusKey="prStatus" data={data} label='Purchase Requisition' />
        <StatusCells statusKey="rfqStatus" data={data} label='Quotation Request	' />
        <StatusCells statusKey="receivedQuotation" data={data} label='Quotation Evaluation' />
        <StatusCells statusKey="poStatus" data={data} label='Purchase Order' />
        <StatusCells statusKey="manufacturingStatus" data={data} label='Manufacturing ' />
        <StatusCells statusKey="finalInspection" data={data} label='Inspection' />
        <StatusCells statusKey="deliveryToSite" data={data} label='Delivery' />
    </div>
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
        <Timeline>
          <TimelineEvent
            title={label}
            createdAt={updatedAt ? new Date(updatedAt).toDateString() :  ( createdAt ? new Date(createdAt).toDateString(): "")} 
            icon={<i className={`material-icons md-18 text-green-500 ${status ? "" : "hidden"}`}><Check/></i>}
            className='capitalize font-medium'
          >
            <p className='capitalize font-normal'>{status}</p>
          </TimelineEvent>
        </Timeline>
      </div>
    );
  };
  