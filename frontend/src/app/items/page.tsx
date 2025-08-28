import type { Metadata } from "next";
import { genRoute, RouteType } from "@/client/router";
import { SearchResults } from "@/client/search-results";
import { getItemsBySearchQuery } from "@/server/fetching";

export const metadata: Metadata = {
  title: "Mercado Libre | Search",
  description: "Mercado Libre",
};

interface Props {
  searchParams: Promise<{ search?: string | string[] }>;
}

export default async function Page({ searchParams }: Props) {
  const _query = (await searchParams).search;
  const query = Array.isArray(_query) ? _query[0] : _query;

  let items: Awaited<ReturnType<typeof getItemsBySearchQuery>>["items"] = [];
  let categories: Awaited<
    ReturnType<typeof getItemsBySearchQuery>
  >["categories"] = [];
  if (query) {
    const getItems = await getItemsBySearchQuery({ q: query });
    items = getItems.items;
    categories = getItems.categories;
  }

  return (
    <SearchResults
      items={items}
      breadCrumbs={categories.map((category, index, ar) => ({
        label: category,
        href:
          index < ar.length - 1 ? genRoute({ type: RouteType.SEARCH }) : null,
      }))}
    />
  );
}
