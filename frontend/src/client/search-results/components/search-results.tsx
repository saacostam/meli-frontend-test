import { EmptySearch } from "@/client/core.components";
import type { Item } from "@/shared/fetching";
import { SearchResultItem } from "./search-result-item";

export interface SearchResultsProps {
  items: Item[];
}

export function SearchResults({ items }: SearchResultsProps) {
  const isEmpty = items.length === 0;

  return (
    <div className="bg-white divide-y divide-gray-200 rounded">
      {isEmpty && (
        <div className="p-4">
          <EmptySearch />
        </div>
      )}
      {!isEmpty &&
        items.map((item) => <SearchResultItem key={item.id} item={item} />)}
    </div>
  );
}
