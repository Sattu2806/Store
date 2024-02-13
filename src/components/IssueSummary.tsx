import { Status } from '@prisma/client';
import { Card } from './ui/card';
import Link from 'next/link';
import React from 'react';

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: {
    label: string;
    value: number;
    status: Status;
  }[] = [
    { label: 'Open Issues', value: open, status: 'OPEN' },
    {
      label: 'In-progress Issues',
      value: inProgress,
      status: 'IN_PROGRESS',
    },
    { label: 'Closed Issues', value: closed, status: 'CLOSED' },
  ];

  return (
    <div className='flex items-center gap-4'>
      {containers.map((container) => (
        <Card key={container.label}>
          <div className='flex flex-col gap-1'>
            <Link
              className='text-sm font-medium'
              href={`/issues/list?status=${container.status}`}
            >
              {container.label}
            </Link>
            <p  className='font-bold text-xl'>{container.value}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default IssueSummary;