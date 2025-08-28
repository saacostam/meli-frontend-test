import { ROUTER_TYPE } from "next/dist/build/utils";

export enum RouteType {
  SEARCH = "search",
  SEARCH_RESULT = "search-result",
  ITEM_BY_ID = "item-by-id",
}

export type RouteAction =
  | {
      type: RouteType.SEARCH;
    }
  | {
      type: RouteType.SEARCH_RESULT;
      payload: {
        search: string;
      };
    }
  | {
      type: RouteType.ITEM_BY_ID;
      payload: {
        id: string;
      };
    };
