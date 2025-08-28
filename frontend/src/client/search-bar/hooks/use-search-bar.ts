"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useMemo, useState } from "react";
import { genRoute, RouteType } from "@/client/router";

export function useSearchBar() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const querySearchValue = searchParams.get("search");

  const [search, setSearch] = useState<string>(querySearchValue || "");

  const onSubmit = useCallback(
    (searchValue: string) => {
      if (searchValue.trim() === "") return;

      router.push(
        genRoute({
          type: RouteType.SEARCH_RESULT,
          payload: {
            search: searchValue,
          },
        }),
      );
    },
    [router.push],
  );

  return useMemo(
    () => ({
      onSubmit,
      search,
      setSearch,
    }),
    [onSubmit, search],
  );
}
