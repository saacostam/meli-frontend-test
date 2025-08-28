import { useMemo } from "react";
import { Skeleton } from "@/client/core.components";

export default function () {
  const mockArray = useMemo(() => new Array(4).fill(null), []);

  return (
    <div className="bg-white divide-y divide-gray-200 rounded">
      {mockArray.map((_, index) => (
        <div className="flex gap-2 p-4" key={+index}>
          <Skeleton className="w-48 h-48" />
          <div className="flex-1 flex flex-col gap-2">
            <Skeleton className="w-12 h-4" />
            <Skeleton className="w-full h-4" />
          </div>
        </div>
      ))}
    </div>
  );
}
