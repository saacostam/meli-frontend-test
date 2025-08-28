import { Skeleton } from "@/client/core.components";

export default function () {
  return (
    <div className="bg-white divide-y divide-gray-200 rounded p-4">
      <Skeleton className="w-full h-96" />
    </div>
  );
}
