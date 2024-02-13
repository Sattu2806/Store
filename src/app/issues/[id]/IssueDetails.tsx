import IssueStatusBadge from '@/components/IssueStatusBadge';
import { Issue } from '@prisma/client';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <div className='p-4'>
      <h1 className='text-xl font-semibold'>{issue.title}</h1>
      <div  className=" flex items-center space-x-3 my-2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card className="prose max-w-full mt-4 p-2" >
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetails;