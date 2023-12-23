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
import { ImageGroup, ImageT } from "@/lib/types"
import Image from "next/image"
import axios from "axios"
import { useQuery } from "react-query"
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger, } 
from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { useState } from "react"
import { Input } from "@/components/ui/input"


export const columns: ColumnDef<ImageT>[] = [
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
    accessorKey: "url",
    header: "Image",
    cell:({row}) => {
        return(
            <Image
            className="h-16 w-16  rounded-sm"
            src={row.original.url ? row.original.url : 'No Image'} // imported a default image in case no image
            alt=""
            width={40}
            height={40}
            />
        )
    }
  },
  {
    accessorKey: "description",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="text-lg"
          >
            Description
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
    },
  },
  {
    accessorKey: "groupId",
    header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="text-lg py-2" 
          >
            Group
          </Button>
        )
    },
    cell:({row}) => {
        const {data: GroupData, error: GroupDatanError, isLoading: isGroupDataLoading, refetch:refetchGroupData} = useQuery<ImageGroup[]>({
            queryKey:'GroupData',
            queryFn: ()=> axios.get('/api/group').then((res) => res.data),
            staleTime:60 * 1000,
            retry:3
        })
        return (
            <div>{(GroupData?.find((group) => group.id === row.original.groupId))?.name}</div>
        )
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const image = row.original
      const [openDialogue, setOpenDialogue] = useState<boolean>(false)
      const [openDeleteDialogue, setOpenDeleteDialogue] = useState<boolean>(false)
      const [editDescription, seteditDescription] = useState('')
      const handleChangeEditDep = (event: any) => {
        seteditDescription(event.target.value);
      };
      const DeleteImage = async () => {
        try {
            const response = await axios.delete('/api/fileupload',{
                params:{
                    id:row.original.id
                }
            })
            console.log(response)
            setOpenDeleteDialogue(false)
        }catch{
            console.log('error deleting data')
        }
      }
      const saveChanges = async () => {
        if(editDescription){
          try {
            const response = await axios.patch(`/api/fileupload`,{
                id:row.original.id,
                description:editDescription
            });
            if (response.status === 200) {
              console.log('Image Description edited successfully');
              setOpenDialogue(false)
              
            } else {
              console.error('Image Description could not be edited. Status code:', response.status);
            }
          } catch (error) {
            console.error('An error occurred while editing the Image Description', error);
          }
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
            <DropdownMenuItem onClick={() => setOpenDeleteDialogue(true)} >
                <Button className="w-[120px] bg-red-500" >Delete</Button>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenDialogue(true)}><Button className="w-[120px]" >Edit</Button></DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialog open={openDeleteDialogue}>
            <AlertDialogContent style={{ maxWidth: 450 }}>
                    <AlertDialogTitle>Delete Image</AlertDialogTitle>
                    <AlertDialogDescription >
                        Are you sure you want to delete this Image Data?
                    </AlertDialogDescription>
                    <div className="flex items-center justify-end gap-3 mt-4">
                        <AlertDialogCancel onClick={() => setOpenDeleteDialogue(false)}>
                            Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={DeleteImage}>
                            Delete
                        </AlertDialogAction>
                    </div>
            </AlertDialogContent>
        </AlertDialog>
        <Dialog open={openDialogue}>
                <DialogContent style={{ maxWidth: 450 }}>
                <DialogTitle>Edit Image</DialogTitle>
                <div className="flex flex-col gap-3">
                    <label>
                        <p className="font-semibold my-3 ">
                        Edit Image Description
                        </p>
                        <Input onChange={handleChangeEditDep} value={editDescription}
                        placeholder="Change the Description"
                        />
                    </label>
                    </div>
                <div className="flex items-center justify-end gap-3 mt-4">
                    <DialogClose onClick={() => setOpenDialogue(false)}>
                        <Button variant='secondary' size='lg' onClick={() => setOpenDialogue(false)} color="gray">
                        Cancel
                        </Button>
                    </DialogClose>
                    <DialogClose>
                        <Button onClick={saveChanges} >Save</Button>
                    </DialogClose>
                </div>
                </DialogContent>
            </Dialog>
        </>
      )
    },
  },
]
