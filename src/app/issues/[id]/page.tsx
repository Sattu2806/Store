import prisma from "@/lib/prismadb"
import { notFound } from 'next/navigation';
import EditIssueButton from './EditIssueButton';
import IssueDetails from './IssueDetails';
import DeleteIssueButton from './DeleteIssueButton';
import { auth } from "@/auth";
import AssigneeSelect from "./AssineeSelect";
import { cache } from 'react';

interface Props {
  params: { id: string };
}

const fetchUser = cache((issueId: number) => prisma.issue.findUnique({ where: { id: issueId }}));

const IssueDetailPage = async ({ params }: Props) => {
  const session = await auth()

  const issue = await fetchUser(parseInt(params.id));

  if (!issue) notFound();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 max-w-[900px] mx-auto mt-10" >
      <div className="md:col-span-4  border-[1px] rounded-md">
        <IssueDetails issue={issue} />
      </div>
      {session && (
        <div className="">
          <div className="flex flex-col gap-4">
            <AssigneeSelect issue={issue} />
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </div>
        </div>
      )}
    </div>
  );
};

export async function generateMetadata({ params }: Props) {
  const issue = await fetchUser(parseInt(params.id));

  return {
    title: issue?.title,
    description: 'Details of issue ' + issue?.id
  }
}

export default IssueDetailPage;