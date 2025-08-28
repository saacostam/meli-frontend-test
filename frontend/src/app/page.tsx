import { Skeleton } from "@/client/core.components";

export default function Home() {
  return <div className="bg-white rounded p-4 space-y-4">
    <Skeleton className="w-full h-48"/>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <Skeleton className="w-full h-48"/>
      <Skeleton className="w-full h-48"/>
      <Skeleton className="w-full h-48"/>
      <Skeleton className="w-full h-48"/>
    </div>
    <Skeleton className="w-full h-48"/>
  </div>;
}
