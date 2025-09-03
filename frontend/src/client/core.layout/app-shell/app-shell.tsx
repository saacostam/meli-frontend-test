import Link from "next/link";
import { Suspense, type PropsWithChildren } from "react";
import { Logo } from "@/client/core.components";
import { genRoute, RouteType } from "@/client/router";
import { SearchBar } from "@/client/search-bar";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-primary py-2 px-4">
        <div className="flex max-w-5xl mx-auto gap-6 items-center">
          <Link href={genRoute({ type: RouteType.SEARCH })}>
            <Logo width="48" />
          </Link>
          <Suspense>
            <SearchBar className="flex-1" />
          </Suspense>
        </div>
      </div>
      <div className="px-4">
        <div className="max-w-5xl mx-auto mt-4 mb-8">{children}</div>
      </div>
    </>
  );
}
