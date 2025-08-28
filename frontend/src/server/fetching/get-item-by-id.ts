import {
  buildBackendUrl,
  type GetItemByIdRequest,
  type GetItemByIdResponse,
} from "@/shared/fetching";

export async function getItemById(
  req: GetItemByIdRequest,
): Promise<GetItemByIdResponse> {
  const url = buildBackendUrl(`/api/items/${req.id}`);
  const res = await fetch(url.toString());
  const body = res.json();

  return body as unknown as GetItemByIdResponse;
}
