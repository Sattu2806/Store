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
import { Category, DailyProductivity, Group } from "@prisma/client"
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



export const columns: ColumnDef<DailyProductivity>[] = [
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
    accessorKey: "group",
    id:'group',
    accessorFn: (originalRow) => {
      return originalRow.groupId.toString()
    },
    header: "Group",
    cell:({row}) => {
        const {data: groupData = [], error: groupDatanError, isLoading: groupDataLoading, refetch:refetchgroupData} = useQuery<Group[]>({
          queryKey:'groupdata',
          queryFn: ()=> axios.get('/api/group').then((res) => res.data),
          staleTime:60 * 1000,
          retry:3,
        })
        return(
          <div>{(groupData?.find((item) => item.id === row.original.groupId))?.name}{row.original.groupId}</div>
        )
    }
  },
  {
    accessorKey: "category",
    id:'category',
    accessorFn: (originalRow) => {
      return originalRow.categoryId.toString()
    },
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
      const {data: categoryData = [], error: categoryDataError, isLoading: categoryDataLoading, refetch:refetchcategoryData} = useQuery<Category[]>({
        queryKey:'allcategorydata',
        queryFn: ()=> axios.get('/api/category').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3,
      })
      return(
        <div>{(categoryData?.find((item) => item.id === row.original.categoryId))?.name}{row.original.categoryId}</div>
      )
    }
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
        return (
          <p>Date</p>
        )
    },
    cell:({row}) => {
        return (
            <div>{new Date(row.original.date).toLocaleDateString()}</div>
        )
    }
  },
  {
    accessorKey: "excavationQty",
    header: ({ column }) => {
        return (
          <p>Excavation
          </p>
        )
    },
    cell:({row}) => {
        return (
            <div>{row.original.excavationQty.toFixed(1)}</div>
        )
    }
  },
  {
    accessorKey: "formWorkQty",
    header: ({ column }) => {
        return (
          <p>FormWork
          </p>
        )
    },
    cell:({row}) => {
        return (
            <div>{row.original.formWorkQty.toFixed(1)}</div>
        )
    }
  },
  {
    accessorKey: "rebarQty",
    header: ({ column }) => {
        return (
          <p>Rebar
          </p>
        )
    },
    cell:({row}) => {
        return (
            <div>{row.original.rebarQty.toFixed(1)}</div>
        )
    }
  },
  {
    accessorKey: "concreteQty",
    header: ({ column }) => {
        return (
          <p>Concrete
          </p>
        )
    },
    cell:({row}) => {
        return (
            <div>{row.original.concreteQty.toFixed(1)}</div>
        )
    }
  },
  {
    accessorKey: "WeekNumber",
    id:"WeekNumber",
    accessorFn: (originalRow) => {
      return originalRow.WeekNumber.toString()
    },
    header: ({ column }) => {
        return (
          <p>WeekNumber 
          </p>
        )
    },
    cell:({row}) => {
        return (
            <div>Week {row.original.WeekNumber}</div>
        )
    }
  },
  {
    accessorKey: "MonthName",
    header: ({ column }) => {
        return (
          <p>MonthName
          </p>
        )
    },
    cell:({row}) => {
        return (
            <div>{row.original.MonthName}</div>
        )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const image = row.original
      const [openDialogue, setOpenDialogue] = useState<boolean>(false)
      const {toast} = useToast()
      const DeleteImage = async () => {
        try {
            const response = await axios.delete('/api/dailyquantity',{
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
                <Link href={`/databased/editdailyquantity/${row.original.id}`}>Edit</Link>
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
    },
  },
]
