import Link from "next/link";
import { ChevronRightIcon } from "@/client/icons";
import type { TBreadCrumb } from "./breadcrumbs.types";

export interface BreadCrumbsProps {
  data: TBreadCrumb[];
}

export function BreadCrumbs({ data }: BreadCrumbsProps) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex flex-wrap gap-2 text-gray-700 items-center text-sm">
        {data.map((crumb, index) => (
          <li key={+index} className="flex items-center">
            {crumb.href ? (
              <Link href={crumb.href} prefetch={false}>
                {crumb.label}
              </Link>
            ) : (
              <span>{crumb.label}</span>
            )}
            {index < data.length - 1 && (
              <ChevronRightIcon className="size-3 ml-2" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
