import {
  buildBackendUrl,
  type GetItemsBySearchQueryRequest,
  type GetItemsBySearchQueryResponse,
} from "@/shared/fetching";

export async function getItemsBySearchQuery(
  req: GetItemsBySearchQueryRequest,
): Promise<GetItemsBySearchQueryResponse> {
  const url = buildBackendUrl(`/api/items?q=${req.q}`);
  const res = await fetch(url.toString());
  const body = res.json();

  return body as unknown as GetItemsBySearchQueryResponse;
}
