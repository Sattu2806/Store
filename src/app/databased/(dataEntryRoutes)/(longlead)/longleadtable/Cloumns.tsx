"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { useQuery } from "react-query"
import React, { useEffect, useState } from "react"
import {Group} from "@prisma/client"
import { GetLongLeadCategory } from "@/actions/(forms)/longleadcategory"
import {TechnicalPR ,RFQ, ReceivedQuotation, PO, Manufacturing, FinalInspection, DeliveryToSite} from '@prisma/client'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { LongLeadItem } from "@/lib/types"
import { updateStatus } from "@/actions/(forms)/longlead"
import Image from "next/image"
import { useRouter } from "next/navigation"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


type DataCellProps = {
  row: {
    original: LongLeadItem
  };
  columnType: "group" | "category";
};

const DataCell: React.FC<DataCellProps> = ({ row, columnType }) => {
  const { data, error, isLoading, refetch } = useQuery<Group[]>(
    {
      queryFn: () => GetLongLeadCategory(),
      staleTime: 60 * 1000,
      retry: 3,
    }
  );

  const name = data?.find((item) => item.id === row.original.categoryId)?.name
  return <div>{name}</div>;
}





export const columns: ColumnDef<LongLeadItem>[] = [
    {
    id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={
              table.getIsAllPageRowsSelected() ||
              (table.getIsSomePageRowsSelected() && "indeterminate")
            }
            onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
            aria-label="Select all"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onCheckedChange={(value) => row.toggleSelected(!!value)}
            aria-label="Select row"
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
  {
    accessorKey: "image",
    id:'image',
    header: "Image",
    cell:({row}) => {
        return(
          <div className="w-[150px] aspect-square flex items-center justify-center">
            <Image src={row.original.image} width={150} height={150} alt="" className="object-cover rounded-sm"/>
          </div>
        )
    }
  },
  {
    accessorKey: "categoryId",
    id:'categoryId',
    accessorFn: (originalRow) => {
      return originalRow.categoryId.toString()
    },
    header: "Category",
    cell:({row}) => {
        return(
          <div className="w-[100px]"><DataCell row={row} columnType="group" /></div>
        )
    }
  },
  {
    accessorKey: "description",
    id:'description',
    header: "Description",
    cell:({row}) => {
        return(
          <div className="w-[100px]">{row.original.description}</div>
        )
    }
  },
  {
    accessorKey: "vendor",
    id:'vendor',
    header: "Vendor",
    cell:({row}) => {
        return(
          <div className="w-[100px]">{row.original.vendor}</div>
        )
    }
  },  
  {
    accessorKey: "technicalEvaluation",
    id:'technicalEvaluation',
    header: "Technical Evaluation",
    cell:({row, table}) => {
        return(
          <div>
            
            <StatusCells row={row} table={table.options.meta} statusKey="technicalEvaluation" />
          </div>
        )
    }
  },
  {
    accessorKey: "prStatus",
    id:'prStatus',
    header: "PR Status",
    cell:({row, table}) => {
        return(
          <div>
            <StatusCells row={row} table={table.options.meta} statusKey="prStatus" />
          </div>
        )
    }
  },
  {
    accessorKey: "rfqStatus",
    id:'rfqStatus',
    header: "RFQ Status",
    cell:({row, table}) => {
        return(
          <div>
            <StatusCells row={row} table={table.options.meta} statusKey="rfqStatus" />
          </div>
        )
    }
  },
  {
    accessorKey: "receivedQuotation",
    id:'receivedQuotation',
    header: "Received Quotation",
    cell:({row, table}) => {
        return(
          <div>
            <StatusCells row={row} table={table.options.meta} statusKey="receivedQuotation" />
          </div>
        )
    }
  },
  {
    accessorKey: "poStatus",
    id:'poStatus',
    header: "PO Status",
    cell:({row, table}) => {
        return(
          <div>
            <StatusCells row={row} table={table.options.meta} statusKey="poStatus" />
          </div>
        )
    }
  },
  {
    accessorKey: "manufacturingStatus",
    id:'manufacturingStatus',
    header: "manufacturing Status",
    cell:({row, table}) => {
        return(
          <div>
            <StatusCells row={row} table={table.options.meta} statusKey="manufacturingStatus" />
          </div>
        )
    }
  },
  {
    accessorKey: "finalInspection",
    id:'finalInspection',
    header: "Final Inspection",
    cell:({row, table}) => {
        return(
          <div>
            <StatusCells row={row} table={table.options.meta} statusKey="finalInspection" />
          </div>
        )
    }
  },
  {
    accessorKey: "deliveryToSite",
    id:'deliveryToSite',
    header: "Delivery To Site",
    cell:({row, table}) => {
        return(
          <div>
            <StatusCells row={row} table={table.options.meta} statusKey="deliveryToSite" />
          </div>
        )
    }
  },
]



type StatusCellsProps = {
  statusKey: string;
  row: {
    original: LongLeadItem
  };
  table:any
};

// const StatusCells: React.FC<StatusCellsProps> = ({ statusKey, row, table }) => {
//   let enumValues: string[] = [];
//   let status: string | undefined;
//   let shouldDisable: boolean = false;

//   switch (statusKey) {
//     case "technicalEvaluation":
//       enumValues = Object.values(TechnicalPR);
//       status = row.original.technicalEvaluation?.status;
//       break;
//     case "prStatus":
//       enumValues = Object.values(TechnicalPR);
//       shouldDisable = row.original.technicalEvaluation?.status !== "Completed";
//       status = row.original.prStatus?.status;
//       break;
//     case "rfqStatus":
//       enumValues = Object.values(RFQ);
//       shouldDisable =
//         row.original.technicalEvaluation?.status !== "Completed" ||
//         row.original.prStatus?.status !== "Completed";
//       status = row.original.rfqStatus?.status;
//       break;
//     case "receivedQuotation":
//       enumValues = Object.values(ReceivedQuotation);
//       shouldDisable =
//         row.original.technicalEvaluation?.status !== "Completed" ||
//         row.original.prStatus?.status !== "Completed" ||
//         row.original.rfqStatus?.status !== "Senttovendor";
//       status = row.original.receivedQuotation?.status;
//       break;
//     case "poStatus":
//       enumValues = Object.values(PO);
//       shouldDisable =
//         row.original.technicalEvaluation?.status !== "Completed" ||
//         row.original.prStatus?.status !== "Completed" ||
//         row.original.rfqStatus?.status !== "Senttovendor" ||
//         row.original.receivedQuotation?.status !== "Vendorselected";
//       status = row.original.poStatus?.status;
//       break;
//     case "manufacturingStatus":
//       enumValues = Object.values(Manufacturing);
//       shouldDisable =
//         row.original.technicalEvaluation?.status !== "Completed" ||
//         row.original.prStatus?.status !== "Completed" ||
//         row.original.rfqStatus?.status !== "Senttovendor" ||
//         row.original.receivedQuotation?.status !== "Vendorselected" ||
//         row.original.poStatus?.status !== "Placed"
//       status = row.original.manufacturingStatus?.status;
//       break;
//     case "finalInspection":
//       enumValues = Object.values(FinalInspection);
//       shouldDisable =
//         row.original.technicalEvaluation?.status !== "Completed" ||
//         row.original.prStatus?.status !== "Completed" ||
//         row.original.rfqStatus?.status !== "Senttovendor" ||
//         row.original.receivedQuotation?.status !== "Vendorselected" ||
//         row.original.poStatus?.status !== "Placed" ||
//         row.original.manufacturingStatus?.status !== "Completed";
//       status = row.original.finalInspection?.status;
//       break;
//     case "deliveryToSite":
//       enumValues = Object.values(DeliveryToSite);
//       shouldDisable =
//         row.original.technicalEvaluation?.status !== "Completed" ||
//         row.original.prStatus?.status !== "Completed" ||
//         row.original.rfqStatus?.status !== "Senttovendor" ||
//         row.original.receivedQuotation?.status !== "Vendorselected" ||
//         row.original.poStatus?.status !== "Placed" ||
//         row.original.manufacturingStatus?.status !== "Completed" ||
//         row.original.finalInspection?.status !== "Completed";
//       status = row.original.deliveryToSite?.status;
//       break;
//     default:
//       break;
//   }

//   type UpdateStatusResponse = { success: string; error?: undefined } | { error: string; success?: undefined };


//   const [disableStatus, setDisableStatus] = useState<boolean>(shouldDisable);
//   const [selectedStatus, setSelectedStatus] = useState<string | undefined>(status);
//   const [openDialogue, setOpenDialogue] = useState<boolean>(false)
//   const [updating, setUpdating] = useState<boolean>(false)
//   const [result, setresult] = useState<UpdateStatusResponse>()

//   useEffect(() => {
//     setDisableStatus(shouldDisable);
//   }, [shouldDisable]);

//   const handleStatusChange = (value: string) => {
//     setUpdating(true)
//     setSelectedStatus(value);
//     updateStatus(statusKey, value, row.original.id, ).then((res) => { 
//       setresult(res)
//       setOpenDialogue(true); 
//       table?.updateData()
//     })
//     setUpdating(false)
//   };



//   return (
//     <div>
//       <Select value={selectedStatus} onValueChange={(value) => handleStatusChange(value)}>
//         <SelectTrigger  disabled={disableStatus} className={`w-[180px] ${updating ? "pointer-events-none":""}`}>
//           <SelectValue placeholder={status ? status : "Status"} />
//         </SelectTrigger>
//         <SelectContent>
//           {enumValues.map((value, index) => (
//             <SelectItem value={value} key={index}>
//               {value}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//       <AlertDialog open={openDialogue}>
//       <AlertDialogContent>
//         <AlertDialogHeader>
//           <AlertDialogDescription className={`${result?.success ? "text-green-500" : "text-red-500"}`}>
//             {result?.error} {result?.success}
//           </AlertDialogDescription>
//         </AlertDialogHeader>
//         <AlertDialogFooter>
//           <AlertDialogCancel color="green" onClick={() => setOpenDialogue(false)}>Cancel</AlertDialogCancel>
//         </AlertDialogFooter>
//       </AlertDialogContent>
//     </AlertDialog>
//     </div>
//   );
// };



const StatusCells: React.FC<StatusCellsProps> = ({ statusKey, row, table }) => {
  // Define the enum values and the current status for each status key
  const enumValuesMap: Record<string, string[]> = {
    technicalEvaluation: Object.values(TechnicalPR),
    prStatus: Object.values(TechnicalPR),
    rfqStatus: Object.values(RFQ),
    receivedQuotation: Object.values(ReceivedQuotation),
    poStatus: Object.values(PO),
    manufacturingStatus: Object.values(Manufacturing),
    finalInspection: Object.values(FinalInspection),
    deliveryToSite: Object.values(DeliveryToSite),
  };

  const statusMap: Record<string, string | undefined> = {
    technicalEvaluation: row.original.technicalEvaluation?.status,
    prStatus: row.original.prStatus?.status,
    rfqStatus: row.original.rfqStatus?.status,
    receivedQuotation: row.original.receivedQuotation?.status,
    poStatus: row.original.poStatus?.status,
    manufacturingStatus: row.original.manufacturingStatus?.status,
    finalInspection: row.original.finalInspection?.status,
    deliveryToSite: row.original.deliveryToSite?.status,
  };


  const enumValues = enumValuesMap[statusKey];
  const currentStatus = statusMap[statusKey];
  type UpdateStatusResponse = { success: string; error?: undefined } | { error: string; success?: undefined };

  const [openDialogue, setOpenDialogue] = useState<boolean>(false)
  const [updating, setUpdating] = useState<boolean>(false)
  const [result, setresult] = useState<UpdateStatusResponse>()

  const [selectedStatus, setSelectedStatus] = React.useState(currentStatus);

  const handleStatusChange = (value: string) => {
    setUpdating(true)
    setSelectedStatus(value);
    updateStatus(statusKey, value, row.original.id, ).then((res) => { 
      setresult(res)
      setOpenDialogue(true); 
      table?.updateData()
    })
    setUpdating(false)
  };

  const [openDialog, setOpenDialog] = React.useState(false);

  const toggleDialog = () => {
    setOpenDialog(!openDialog);
  };
  return (
    <>
      <Select value={selectedStatus} onValueChange={handleStatusChange}>
        <SelectTrigger className={`w-[180px] ${updating ? "pointer-events-none":""}`}>
          <SelectValue placeholder={currentStatus ? currentStatus : "Status"} />
        </SelectTrigger>
        <SelectContent>
          {enumValues.map((value, index) => (
            <SelectItem value={value} key={index}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <AlertDialog open={openDialogue}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogDescription className={`${result?.success ? "text-green-500" : "text-red-500"}`}>
            {result?.error} {result?.success}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel color="green" onClick={() => setOpenDialogue(false)}>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    </>
  );
};