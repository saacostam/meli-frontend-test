import { LinkButton } from "@/client/core.components";
import { genRoute, RouteType } from "@/client/router";
import { CurrencyFormatUtils } from "@/shared/currency";
import type { Item } from "@/shared/fetching";
import { StringFormatUtils } from "@/shared/string";

export interface ItemByIdViewProps {
  item: Item;
}

export function ItemByIdView({ item }: ItemByIdViewProps) {
  return (
    <div className="bg-white rounded p-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-5 sm:col-span-3 space-y-6 p-4">
          <img src={item.picture} alt={item.title} className="w-full" />
          <h3 className="text-black font-medium text-2xl">
            Descripción del producto
          </h3>
          <p className="text-gray-700">{item.description}</p>
        </div>
        <div className="col-span-5 sm:col-span-2 p-4 text-black">
          <span className="text-sm">
            {StringFormatUtils.capitalize(item.condition)} -{" "}
            {item.sold_quantity} vendidos
          </span>
          <h2 className="font-semibold text-2xl mt-2">{item.title}</h2>
          <span className="text-6xl flex leading-12 mt-4">
            $ {CurrencyFormatUtils.formatIntegerPart(item.price.amount)}{" "}
            <span className="text-2xl mr-2 underline">
              {item.price.decimals}
            </span>
          </span>
          <LinkButton className="mt-10 w-full" href={"#"}>
            Comprar
          </LinkButton>
        </div>
      </div>
    </div>
  );
}
