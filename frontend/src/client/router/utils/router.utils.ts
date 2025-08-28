import { type RouteAction, RouteType } from "../types";

export function genRoute(action: RouteAction): string {
  switch (action.type) {
    case RouteType.SEARCH: {
      return "/";
    }
    case RouteType.SEARCH_RESULT: {
      return `/items?search=${action.payload.search}`;
    }
  }
}
