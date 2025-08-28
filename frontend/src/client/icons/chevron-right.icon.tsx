import { twMerge } from "tailwind-merge";

export interface ChevronRightIconProps {
  className?: string;
}

export function ChevronRightIcon({ className }: ChevronRightIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={twMerge("size-6", className)}
    >
      <title>Chevron Right</title>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}
