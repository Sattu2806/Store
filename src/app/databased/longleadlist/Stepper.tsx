import { LongLeadItem } from '@/lib/types'
import React from 'react'
import {TechnicalPR ,RFQ, ReceivedQuotation, PO, Manufacturing, FinalInspection, DeliveryToSite} from '@prisma/client'

type Props = {
    data: LongLeadItem
}


const Stepper = ({data}: Props) => {
console.log(data)

  return (
    <div>
        <StatusCells statusKey="technicalEvaluation" data={data} />
        <StatusCells statusKey="prStatus" data={data} />
        <StatusCells statusKey="rfqStatus" data={data} />
        <StatusCells statusKey="receivedQuotation" data={data} />
        <StatusCells statusKey="poStatus" data={data} />
        <StatusCells statusKey="manufacturingStatus" data={data} />
        <StatusCells statusKey="finalInspection" data={data} />
        <StatusCells statusKey="deliveryToSite" data={data} />
    </div>
  )
}

export default Stepper


type StatusCellsProps = {
    statusKey: string;
    data:LongLeadItem
  };
  
  const StatusCells: React.FC<StatusCellsProps> = ({ statusKey, data }) => {
    let enumValues: string[] = [];
    let status: string | undefined;
    let shouldDisable: boolean = false;
  
    switch (statusKey) {
      case "technicalEvaluation":
        enumValues = Object.values(TechnicalPR);
        status = data.technicalEvaluation?.status;
        break;
      case "prStatus":
        enumValues = Object.values(TechnicalPR);
        status = data.prStatus?.status;
        break;
      case "rfqStatus":
        enumValues = Object.values(RFQ);
        status = data.rfqStatus?.status;
        break;
      case "receivedQuotation":
        enumValues = Object.values(ReceivedQuotation);
        status = data.receivedQuotation?.status;
        break;
      case "poStatus":
        enumValues = Object.values(PO);
        status = data.poStatus?.status;
        break;
      case "manufacturingStatus":
        enumValues = Object.values(Manufacturing);
        status = data.manufacturingStatus?.status;
        break;
      case "finalInspection":
        enumValues = Object.values(FinalInspection);
        status = data.finalInspection?.status;
        break;
      case "deliveryToSite":
        enumValues = Object.values(DeliveryToSite);
        status = data.deliveryToSite?.status;
        break;
      default:
        break;
    }
  
  
    return (
      <div>
        {statusKey}:  {status}
      </div>
    );
  };
  