export enum RouteType {
  SEARCH = "search",
  SEARCH_RESULT = "search-result",
}

export type RouteAction = {
  type: RouteType.SEARCH,
} | {
  type: RouteType.SEARCH_RESULT,
  payload: {
    search: string;
  }
}
