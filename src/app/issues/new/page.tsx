import dynamic from "next/dynamic";
import SkeletonComp from "@/components/Skeleton";

const IssueForm = dynamic(
  () => import('@/app/issues/_components/IssueForm'),
  { 
    ssr: false,
    loading: () => <SkeletonComp />
  }
);

const NewIssuePage = () => {
  return (
    <div className="">
    <IssueForm />
    </div>
  )
}

export default NewIssuePage