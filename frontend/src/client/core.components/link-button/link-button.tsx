import Link, { type LinkProps } from "next/link";
import type { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export type LinkButtonProps = LinkProps & {
  className?: string;
};

export function LinkButton({
  className,
  ...rest
}: PropsWithChildren<LinkButtonProps>) {
  return (
    <Link
      {...rest}
      className={twMerge(
        "bg-blue-500 text-white p-2 focus:outline outline-blue-400 hover:cursor-pointer inline-block text-center rounded",
        className,
      )}
    />
  );
}
