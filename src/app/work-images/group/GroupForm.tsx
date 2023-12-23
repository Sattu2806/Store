'use client'
import React, { useEffect, useState } from 'react'

import axios from 'axios';
import { useQuery } from 'react-query';
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
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { DialogClose } from '@radix-ui/react-dialog';






type Props = {}

interface Group {
    id:number
    name: string
}

const AddDataBranchForm = (props: Props) => {
    const [group, setGroup] = useState('')
    const [editGroup, seteditGroup] = useState('')
    const [iseditable, setIseditable] = useState(false);
    const [tobeEdited, settobeEdited] = useState<number>();
    const [tobedeledted, settobedeleted] = useState<number>()

    const addDepartments = async () => {
      try {
        const response = await axios.post('/api/imagegroup', {
          name: group
        });
    
        if (response.status === 200) {
          seteditGroup('')
          setGroup('')
          await refetchGroupData()
        } else {
          console.error('Branch could not be added. Status code:', response.status);
        }
      } catch (error) {
        console.error('An error occurred while adding the branch', error);
      }
    };

    const confirmDelete = async (id: number) => {
      try {
        const response = await axios.delete(`/api/imagegroup`,{
          params:{
            id:id
          }
        });
        if (response.status === 200) {
          await refetchGroupData()
        } else {
          console.error('Branch could not be deleted. Status code:', response.status);
        }
      } catch (error) {
        console.error('An error occurred while deleting the branch', error);
      } finally {
        settobedeleted(undefined)
      }
    };

    const saveChanges = async () => {
      if(editGroup){
        try {
          const response = await axios.patch(`/api/imagegroup`,{
              id:tobeEdited,
              name:editGroup
          });
          if (response.status === 200) {
            console.log('Branch edited successfully');
            setIseditable(false);
            settobeEdited(undefined)
            seteditGroup('')
            await refetchGroupData()
            
          } else {
            console.error('Branch could not be edited. Status code:', response.status);
          }
        } catch (error) {
          console.error('An error occurred while editing the branch', error);
        }
      }
    }
    

      const {data: GroupData = [], error: GroupDatanError, isLoading: isGroupDataLoading, refetch:refetchGroupData} = useQuery<Group[]>({
        queryKey:'GroupData',
        queryFn: ()=> axios.get('/api/imagegroup').then((res) => res.data),
        staleTime:60 * 1000,
        retry:3
    })

      const handleChangeDep = (event:any) => {
        setGroup(event.target.value);
      };
      const handleChangeEditDep = (event: any) => {
        seteditGroup(event.target.value);
      };

      const GroupToEdit = GroupData?.find((Group) => Group.id === tobeEdited);
      console.log(GroupToEdit)

      
  return (
    <div className='my-10'>
        <p className='mb-10 text-center font-semibold block clear-left text-2xl'>Add Group</p>
        <div className='my-6'></div>
        <Input className='text-xl' onChange={handleChangeDep} value={group} placeholder='Name of Branch'/>
        <div className='my-6'></div>
        <Button onClick={addDepartments} size='lg' className='text-gray-50 bg-gray-800 px-10 text-lg' color='crimson'>Add</Button>
        <div className='my-6'></div>
        <Card className='p-5'>
            <CardTitle className='font-semibold text-center text-xl mt-3'>List of Groups</CardTitle>
            <Table className='my-5'>
            <TableHeader>
                <TableRow>
                <TableHead className='text-lg'>Group Id</TableHead>
                <TableHead className='text-lg' >Group Name</TableHead>
                </TableRow>
            </TableHeader>
            {GroupData && (
            <TableBody>
                {GroupData.map((item) => (
                <TableRow key={item.id} >
                    <TableCell >
                        <p className='font-medium text-xl'>{item.id}</p> 
                    </TableCell>
                    <TableCell>
                    <div className='flex items-center justify-between space-x-6'>
                      <p className='font-medium text-xl'>{GroupData?.find((Group) => Group.id === tobeEdited)?.name}</p> 
                      <div className='flex items-center space-x-2'>
                        <div className={` ${iseditable ? "hidden":""}`}>
                      <div className='flex items-center justify-between gap-5'>
                        <Dialog>
                          <DialogTrigger onClick={() => {settobeEdited(item.id)}}>
                            <Button size='default' color="gray">Edit</Button>
                          </DialogTrigger>
                          <DialogContent style={{ maxWidth: 450 }}>
                            <DialogTitle>Edit Group</DialogTitle>
                            <div className='flex flex-col items-center justify-between gap-3'>
                                <label>
                                  <p className='font-semibold mb-1'>
                                    Edit Group :- {GroupData?.find((Group) => Group.id === tobeEdited)?.name}
                                  </p>
                                  <Input onChange={handleChangeEditDep} value={editGroup}
                                    defaultValue=""
                                    placeholder="Enter new branch name"
                                  />
                                </label>
                              </div>
                            <div className='flex mt-4 items-center justify-end gap-3' >
                              <DialogClose>
                                  <Button size='default' onClick={() => {setIseditable(false); settobeEdited(undefined)}} variant="secondary" color="gray">
                                    Cancel
                                  </Button>
                                </DialogClose>
                                <DialogClose>
                                  <Button onClick={saveChanges} >Save</Button>
                                </DialogClose>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <AlertDialog>
                          <AlertDialogTrigger onClick={() => {settobedeleted(item.id)}}>
                            <Button size='default' color="red">Delete</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent style={{ maxWidth: 450 }}>
                            <AlertDialogTitle>Delete Branch : {GroupData?.find((Group) => Group.id === tobedeledted)?.name}</AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to delete this Branch? data related to this branch will all be deleted.
                            </AlertDialogDescription>

                            <div className='flex mt-4 items-center justify-end gap-3'>
                              <AlertDialogCancel>
                                <Button variant="secondary" color="gray">
                                  Cancel
                                </Button>
                              </AlertDialogCancel>
                              <AlertDialogAction>
                                {tobedeledted && 
                                    <Button onClick={() => confirmDelete(tobedeledted)} variant="secondary" color="red">
                                    Delete
                                  </Button>
                                }
                              </AlertDialogAction>
                            </div>
                          </AlertDialogContent>
                        </AlertDialog>
                        </div>
                        </div>
                      </div>
                    </div>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            )}
            </Table>
        </Card>
    </div>
  )
}

export default AddDataBranchForm