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
import { Category, Group, TotalScope } from "@prisma/client"
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



export const columns: ColumnDef<TotalScope>[] = [
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
          <div>{(groupData?.find((item) => item.id === row.original.groupId))?.name}</div>
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
        <div>{(categoryData?.find((item) => item.id === row.original.categoryId))?.name}</div>
      )
    }
  },
  {
    accessorKey: "foundationType",
    header: ({ column }) => {
        return (
          <p>foundationType
          </p>
        )
    },
    cell:({row}) => {
        return (
            <div>{row.original.foundationType}</div>
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
      const initialValue = row.original.excavationQty
      const [value, setValue] = useState(initialValue.toString())
      const {toast} = useToast()

      const UpdateQty = async (newValue:string) => {
        try {
          const resposne = await axios.patch('/api/totaltable',{
            id:row.original.id,
            excavationQty:parseFloat(newValue)
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
    accessorKey: "totalFoundations",
    header: ({ column }) => {
        return (
          <p>Total Foundations
          </p>
        )
    },
    cell:({row}) => {
      const initialValue = row.original.totalFoundations
      const [value, setValue] = useState(initialValue.toString())
      const {toast} = useToast()

      const UpdateQty = async (newValue:string) => {
        try {
          const resposne = await axios.patch('/api/totaltable',{
            id:row.original.id,
            totalFoundations:parseInt(newValue)
          })
          console.log(resposne.data)
          toast({
            description:`Total Foundation Quantity Updated Successfully, Value:  ${resposne.data.totalFoundations}`
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
    accessorKey: "rebarQty",
    header: ({ column }) => {
        return (
          <p>Rebar
          </p>
        )
    },
    cell:({row}) => {
      const initialValue = row.original.rebarQty
      const [value, setValue] = useState(initialValue.toString())
      const {toast} = useToast()

      const UpdateQty = async (newValue:string) => {
        try {
          const resposne = await axios.patch('/api/totaltable',{
            id:row.original.id,
            rebarQty:parseFloat(newValue)
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
      const initialValue = row.original.concreteQty
      const [value, setValue] = useState(initialValue.toString())
      const {toast} = useToast()

      const UpdateQty = async (newValue:string) => {
        try {
          const resposne = await axios.patch('/api/totaltable',{
            id:row.original.id,
            concreteQty:parseFloat(newValue)
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
    id: "actions",
    cell: ({ row }) => {
      const [openDialogue, setOpenDialogue] = useState<boolean>(false)
      const {toast} = useToast()
      const DeleteImage = async () => {
        try {
            const response = await axios.delete('/api/totalquantity',{
                params:{
                    id:row.original.id
                }
            })
            console.log(response)
            setOpenDialogue(false)
            toast({
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
                <Link href={`/databased/edittotalquantity/${row.original.id}`}>Edit</Link>
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