"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
import { Checkbox } from "@/components/ui/checkbox"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import axios from "axios"
import { useQuery } from "react-query"
import { useState } from "react"
import { Category, Group } from "@prisma/client"
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
import { useToast } from '@/components/ui/use-toast'
import Link from "next/link"

const DataActions = ({row}:{row:{original:Group}}) => {
  const image = row.original
  const [openDialogue, setOpenDialogue] = useState<boolean>(false)
  const {toast} = useToast()
  const DeleteImage = async () => {
    try {
        const response = await axios.delete('/api/group',{
            params:{
                id:row.original.id
            }
        })
        console.log(response)
        setOpenDialogue(false)
        toast({
          variant:'destructive',
          description: "Data Deleted Successfully Successfully",
        })
    }catch{
        console.log('error deleting data')
    }
  }

  return (
    <>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setOpenDialogue(true)} >
                <Button className="w-[120px]" >Delete</Button>
            </DropdownMenuItem>
            <DropdownMenuItem> 
              <Button className="w-[120px]">
                <Link href={`/databased/editgroup/${row.original.id}`}>Edit</Link>
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialog open={openDialogue}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete this data.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setOpenDialogue(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction className="bg-red-500" onClick={DeleteImage}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        </>
  )
}



export const columns: ColumnDef<Group>[] = [
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
    accessorKey: "name",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-lg"
          >
            Category
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
    cell:({row}) => {
      return(
        <div>{row.original.name}</div>
      )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {

      return (
        <DataActions row={row} />
      )
    },
  },
]
