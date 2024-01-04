"use client";

import { admin } from "@/actions/admin";
import { RoleGate } from "@/components/auth/role-gate";
import { FormSuccess } from "@/components/form-success";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User, UserRole } from "@prisma/client";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import axios from "axios";
import { useQuery } from "react-query";
import { toast } from "sonner";
import { useState } from "react";

const AdminPage = () => {
  const onServerActionClick = () => {
    admin()
      .then((data) => {
        if (data.error) {
          toast.error(data.error);
        }

        if (data.success) {
          toast.success(data.success);
        }
      })
  }
  
//   const onApiRouteClick = () => {
//     fetch("/api/admin")
//       .then((response) => {
//         if (response.ok) {
//           toast.success("Allowed API Route!");
//         } else {
//           toast.error("Forbidden API Route!");
//         }
//       })
//   }

  const {data: Users , error: UserError, isLoading: isUserLoading, refetch:refetchUser} = useQuery<User[]>({
    queryKey:'users',
    queryFn: async () => {
        try {
          const res = await axios.get('/api/admin');
          return res.data;
        } catch (error) {
          throw new Error('Failed to fetch data');
        }
    },
    staleTime:60 * 1000,
    retry:3,
})

if(!Users){
    return (
        <div></div>
    )
}

const ChangeRole = () => {

}


  return (
    <Card className="max-w-[800px] mx-auto my-4">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">
          🔑 Admin
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <RoleGate allowedRole={UserRole.ADMIN}>
          <FormSuccess
            message="You are allowed to see this content!"
          />
        {Users.map((user,index)=>(
            <div key={index} className="flex items-center justify-between rounded-md shadow-sm p-3 py-4">
                <p className="text-sm font-medium">
                    {user.name}
                </p>
                <p className="text-sm font-medium">
                    {user.email}
                </p>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={user.role} />
                    </SelectTrigger>
                    <SelectContent >
                        <SelectGroup>
                        <SelectItem value="ADMIN">ADMIN</SelectItem>
                        <SelectItem value="USER">USER</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        ))}
        </RoleGate>
      </CardContent>
    </Card>
  );
};

export default AdminPage;