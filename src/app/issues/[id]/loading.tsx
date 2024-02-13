import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const LoadingIssueDetailPage = () => {
  return (
    <div className='max-w-xl border-[1px] rounded-md'>
      <Skeleton />
      <div className=" flex items-center space-x-3 my-2">
        <Skeleton  />
        <Skeleton  />
      </div>
      <Card className='prose mt-4'>
        <Skeleton/>
        <Skeleton/>
        <Skeleton/>
      </Card>
    </div>
  )
}

export default LoadingIssueDetailPage