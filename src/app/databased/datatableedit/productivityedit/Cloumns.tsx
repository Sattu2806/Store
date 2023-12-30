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
import React, { useEffect, useState } from "react"
import { Group, Project } from "@prisma/client"
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
import debounce from "lodash/debounce";



export const columns: ColumnDef<Project>[] = [
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
    accessorKey: "Discipline",
    id:'Discipline',
    accessorFn: (originalRow) => {
      return originalRow.Discipline
    },
    header: "Group",
    cell:({row}) => {
        return(
          <div>{row.original.Discipline}</div>
        )
    }
  },
  {
    accessorKey: "Area",
    id:'Area',
    accessorFn: (originalRow) => {
      return originalRow.Area
    },
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-lg"
          >
            Area
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
    cell:({row}) => {
      return(
        <div>{row.original.Area}</div>
      )
    }
  },
  {
    accessorKey: "Date",
    header: ({ column }) => {
        return (
          <p>Date</p>
        )
    },
    cell:({row}) => {
        return (
            <div>{new Date(row.original.Date).toLocaleDateString()}</div>
        )
    }
  },
  {
    accessorKey: "Excavation",
    header: ({ column }) => {
        return (
          <p>Excavation
          </p>
        )
    },
    cell:({row}) => {
        const initialValue = row.original.Excavation
        const [value, setValue] = useState(initialValue.toString())
        const {toast} = useToast()

        const UpdateQty = async (newValue:string) => {
          try {
            const resposne = await axios.patch('/api/productivitytable',{
              id:row.original.id,
              Excavation:parseFloat(newValue)
            })
            console.log(resposne.data)
            toast({
              description:`Excavation Quantity Updated Successfully, Value:  ${resposne.data.excavationQty}`
            })
          } catch (error) {
            console.log('Error while updating data')
            toast({
              variant:'destructive',
              description:`Could not update the data, Value:  ${newValue}`
            })
          }
        }

        const debouncedUpdateQty = debounce(UpdateQty, 2000);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const newValue = e.target.value;
          setValue(newValue);
          debouncedUpdateQty(newValue);
        };
        return (
            <div className="text-center">
              <input
                className="w-[60px]"
                value={value}
                onChange={handleChange}
              />
            </div>
        )
    }
  },
  {
    accessorKey: "FormWork",
    header: ({ column }) => {
        return (
          <p>FormWork
          </p>
        )
    },
    cell:({row}) => {
      const initialValue = row.original.FormWork
      const [value, setValue] = useState(initialValue.toString())
      const {toast} = useToast()

      const UpdateQty = async (newValue:string) => {
        try {
          const resposne = await axios.patch('/api/productivitytable',{
            id:row.original.id,
            FormWork:parseFloat(newValue)
          })
          console.log(resposne.data)
          toast({
            description:`FormWork Quantity Updated Successfully, Value:  ${resposne.data.excavationQty}`
          })
        } catch (error) {
          console.log('Error while updating data')
          toast({
            variant:'destructive',
            description:`Could not update the data, Value:  ${newValue}`
          })
        }
      }

      const debouncedUpdateQty = debounce(UpdateQty, 2000);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        debouncedUpdateQty(newValue);
      };
        return (
          <div className="text-center">
            <input
              className="w-[60px]"
              value={value}
              onChange={handleChange}
            />
        </div>
        )
    }
  },
  {
    accessorKey: "Rebar",
    header: ({ column }) => {
        return (
          <p>Rebar
          </p>
        )
    },
    cell:({row}) => {
      const initialValue = row.original.Rebar
      const [value, setValue] = useState(initialValue.toString())
      const {toast} = useToast()

      const UpdateQty = async (newValue:string) => {
        try {
          const resposne = await axios.patch('/api/productivitytable',{
            id:row.original.id,
            Rebar:parseFloat(newValue)
          })
          console.log(resposne.data)
          toast({
            description:`Rebar Quantity Updated Successfully, Value:  ${resposne.data.rebarQty}`
          })
        } catch (error) {
          console.log('Error while updating data')
          toast({
            variant:'destructive',
            description:`Could not update the data, Value:  ${newValue}`
          })
        }
      }

      const debouncedUpdateQty = debounce(UpdateQty, 2000);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        debouncedUpdateQty(newValue);
      };
        return (
          <div className="text-center">
          <input
            className="w-[60px]"
            value={value}
            onChange={handleChange}
          />
      </div>
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
      const initialValue = row.original.Concrete
      const [value, setValue] = useState(initialValue.toString())
      const {toast} = useToast()

      const UpdateQty = async (newValue:string) => {
        try {
          const resposne = await axios.patch('/api/productivitytable',{
            id:row.original.id,
            Concrete:parseFloat(newValue)
          })
          console.log(resposne.data)
          toast({
            description:`Concrete Quantity Updated Successfully, Value:  ${resposne.data.concreteQty}`
          })
        } catch (error) {
          console.log('Error while updating data')
          toast({
            variant:'destructive',
            description:`Could not update the data, Value:  ${newValue}`
          })
        }
      }

      const debouncedUpdateQty = debounce(UpdateQty, 2000);

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        debouncedUpdateQty(newValue);
      };
        return (
          <div className="text-center">
          <input
            className="w-[60px]"
            value={value}
            onChange={handleChange}
          />
      </div>
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
          <p>Week
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
          <p>Month
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
    header:'Actions',
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
