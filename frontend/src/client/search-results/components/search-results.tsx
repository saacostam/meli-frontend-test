import {
  BreadCrumbs,
  EmptySearch,
  type TBreadCrumb,
} from "@/client/core.components";
import type { Item } from "@/shared/fetching";
import { SearchResultItem } from "./search-result-item";

export interface SearchResultsProps {
  items: Item[];
  breadCrumbs: TBreadCrumb[];
}

export function SearchResults({ items, breadCrumbs }: SearchResultsProps) {
  const isEmpty = items.length === 0;

  return (
    <>
      {!isEmpty && (
        <div className="mb-4">
          <BreadCrumbs data={breadCrumbs} />
        </div>
      )}
      <div className="bg-white divide-y divide-gray-200 rounded">
        {isEmpty && (
          <div className="p-4">
            <EmptySearch />
          </div>
        )}
        {!isEmpty &&
          items.map((item) => <SearchResultItem key={item.id} item={item} />)}
      </div>
    </>
  );
}
