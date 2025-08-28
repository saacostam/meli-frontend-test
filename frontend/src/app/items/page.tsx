import type { Metadata } from "next";
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

  const items = query ? (await getItemsBySearchQuery({ q: query })).items : [];

  return <SearchResults items={items} />;
}
