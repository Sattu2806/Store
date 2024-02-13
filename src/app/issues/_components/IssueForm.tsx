'use client';

import ErrorMessage from '@/components/ErrorMessage';
import Spinner from '@/components/Spinner';
import { issueSchema } from '@/ZodSchema/ValidationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Issue } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { z } from 'zod';
import { Terminal } from 'lucide-react';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
import { Input } from '@/components/ui/input';

type IssueFormData = z.infer<typeof issueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const router = useRouter();
  const form = useForm<IssueFormData>({
    resolver: zodResolver(issueSchema),
    defaultValues:{
        ...issue
    }
  });
  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = (async (data: z.infer<typeof issueSchema>) => {
    try {
      setSubmitting(true);
      if (issue) await axios.patch('/api/issues/' + issue.id, data);
      else await axios.post('/api/issues', data);
      router.push('/issues/list');
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred.');
    }
  });

  return (
    <div className="max-w-xl mx-auto mt-10">
      {error && (
        <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>
                {error}
            </AlertDescription>
        </Alert>
      
      )}
      {/* <form className="space-y-3" onSubmit={onSubmit}>
        <TextField.Root>
          <TextField.Input
            defaultValue={issue?.title}
            placeholder="Title"
            {...register('title')}
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={issue?.description}
          render={({ field }) => (
            <SimpleMDE placeholder="Description" {...field} />
          )}
        />
        <ErrorMessage>{errors.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {issue ? 'Update Issue' : 'Submit New Issue'}{' '}
          {isSubmitting && <Spinner />}
        </Button>
      </form> */}
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                    <Input placeholder="Title" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <Controller
            name="description"
            control={form.control}
            defaultValue={issue?.description}
            render={({ field }) => (
                <SimpleMDE placeholder="Description" {...field} />
            )}
            />
            <ErrorMessage>{form.formState.errors.description?.message}</ErrorMessage>
            <Button disabled={isSubmitting}>
            {issue ? 'Update Issue' : 'Submit New Issue'}{' '}
            {isSubmitting && <Spinner />}
            </Button>
        </form>
        </Form>
    </div>
  );
};

export default IssueForm;