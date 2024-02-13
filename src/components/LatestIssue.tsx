import prisma from "@/lib/prismadb"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "./ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
  
import React from 'react';
import IssueStatusBadge from "./IssueStatusBadge";
import Link from 'next/link';

const LatestIssues = async () => {
  const issues = await prisma.issue.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5,
    include: {
      assignedToUser: true,
    },
  });

  return (
    <Card>
      <h1 className="text-xl mb-5" >Latest Issues</h1>
      <Table>
        <TableBody>
          {issues.map((issue) => (
            <TableRow key={issue.id}>
              <TableCell>
                <div className="flex items-center justify-center" >
                  <div className="flex flex-col items-start gap-2" >
                    <Link href={`/issues/${issue.id}`}>
                      {issue.title}
                    </Link>
                    <IssueStatusBadge status={issue.status} />
                  </div>
                  {issue.assignedToUser && (
                    <Avatar>
                    <AvatarImage src={issue.assignedToUser.image!} />
                    <AvatarFallback>{issue.assignedToUser.name}</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default LatestIssues;