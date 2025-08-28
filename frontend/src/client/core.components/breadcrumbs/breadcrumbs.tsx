import Link from "next/link";
import { useMemo } from "react";
import { ChevronRightIcon } from "@/client/icons";
import type { TBreadCrumb } from "./breadcrumbs.types";

export interface BreadCrumbsProps {
  data: TBreadCrumb[];
}

export function BreadCrumbs({ data }: BreadCrumbsProps) {
  const breadCrumbsWithChevrons = useMemo(() => {
    const breadCrumbsWithChevrons: (
      | { type: "breadcrumb"; payload: TBreadCrumb }
      | { type: "chevron" }
    )[] = [];

    const n = data.length;

    for (let i = 0; i < n; i++) {
      breadCrumbsWithChevrons.push({
        type: "breadcrumb",
        payload: data[i],
      });
      if (i < n - 1) breadCrumbsWithChevrons.push({ type: "chevron" });
    }

    return breadCrumbsWithChevrons;
  }, [data]);

  return (
    <div className="flex flex-wrap gap-2 text-gray-700 items-center text-sm">
      {breadCrumbsWithChevrons.map((entry, index) => (
        <span key={+index}>
          {entry.type === "breadcrumb" ? (
            entry.payload.href ? (
              <Link href={entry.payload.href} prefetch={false}>
                {entry.payload.label}
              </Link>
            ) : (
              <span>{entry.payload.label}</span>
            )
          ) : (
            <ChevronRightIcon className="size-3" />
          )}
        </span>
      ))}
    </div>
  );
}
