"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { Issue, User } from "@prisma/client";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
  
import { useQuery } from "react-query";
import axios from "axios";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const { data: users, error, isLoading } = useUsers();
  const { toast } = useToast()

  if (isLoading) return <Skeleton />;

  if (error) return null;

  const assignIssue = (userId: string) => {
    axios
      .patch("/api/issues/" + issue.id, {
        assignedToUserId: userId || null,
      })
      .catch(() => {
        toast({
            variant:"destructive",
            description: "Changes could not be saved",
        })
      });
  };

  return (
    <>
      <Select
        defaultValue={issue.assignedToUserId || ""}
        onValueChange={assignIssue}
      >
        <SelectTrigger placeholder="Assign..." />
        <SelectContent>
            {/* <Label>Suggestions</Label> */}
            {/* <SelectItem value="Unassigned">Unassigned</SelectItem> */}
            {users?.map((user) => (
              <SelectItem key={user.id} value={user.id}>
                {user.name}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () =>
      axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });

export default AssigneeSelect;