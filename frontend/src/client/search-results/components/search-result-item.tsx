import Link from "next/link";
import { genRoute, RouteType } from "@/client/router";
import type { Item } from "@/shared/fetching";

export interface SearchResultItemProps {
  item: Item;
}

export function SearchResultItem({ item }: SearchResultItemProps) {
  return (
    <li className="list-none">
      <Link
        className="flex p-4 gap-4"
        href={genRoute({
          type: RouteType.ITEM_BY_ID,
          payload: {
            id: item.id,
          },
        })}
      >
        <img src={item.picture} alt={item.title} width={200} height={200} />
        <div className="flex-1">
          <div className="flex flex-wrap justify-between gap-2">
            <span className="text-2xl flex leading-7">
              $ {item.price.amount}{" "}
              <span className="text-sm mr-2 underline">
                {item.price.decimals}
              </span>
              {item.price.currency}
            </span>
            <span className="bg-gray-100 w-fit h-fit px-4 py-1 rounded-lg text-sm">
              {item.place}
            </span>
          </div>
          <h3>{item.title}</h3>
        </div>
      </Link>
    </li>
  );
}
