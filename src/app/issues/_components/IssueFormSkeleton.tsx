import { Card } from '@/components/ui/card';
import React from 'react';
import SkeletonComp from '@/components/Skeleton';

const IssueFormSkeleton = () => {
  return (
    <Card className="max-w-xl">
      <SkeletonComp  />
      <SkeletonComp  />
    </Card>
  );
};

export default IssueFormSkeleton;