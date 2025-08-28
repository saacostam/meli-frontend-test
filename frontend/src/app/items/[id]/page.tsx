import type { Metadata } from "next";
import { getItemById } from "@/server/fetching";
import NextJsError from "next/error";
import { ItemByIdView } from "@/client/item-by-id";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Mercado Libre | Search",
  description: "Mercado Libre",
};

interface Props {
  params: Promise<{ id?: string | string[] }>;
}

export default async function Page({ params }: Props) {
  const _id = (await params).id;
  const id = Array.isArray(_id) ? _id[0] : _id;

  if (!id) return notFound();

  const { item } = await getItemById({
    id,
  });

  return <ItemByIdView item={item} />;
}
