import type { PropsWithChildren } from "react";
import { Logo } from "@/client/core.components";
import { SearchBar } from "@/client/search-bar";

export function AppShell({ children }: PropsWithChildren) {
  return (
    <>
      <div className="bg-primary p-2">
        <div className="flex max-w-5xl mx-auto gap-6">
          <Logo width="48" />
          <SearchBar className="flex-1" />
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-4">{children}</div>
    </>
  );
}
