import { twMerge } from "tailwind-merge";

export interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={twMerge("bg-gray-200 animate-pulse rounded-2xl", className)}
    />
  );
}
