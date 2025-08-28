"use client";

import { twMerge } from "tailwind-merge";
import { ActionIcon, Input } from "@/client/core.components";
import { MagnifyingGlassIcon } from "@/client/icons";
import { useSearchBar } from "../hooks";

export interface SearchBarProps {
  className?: string;
}

export function SearchBar({ className }: SearchBarProps) {
  const { search, setSearch, onSubmit } = useSearchBar();

  return (
    <form
      className={twMerge("flex items-center", className)}
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(search);
      }}
    >
      <Input
        className="flex-1"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Nunca dejes de buscar"
        value={search}
      />
      <ActionIcon type="submit">
        <MagnifyingGlassIcon />
      </ActionIcon>
    </form>
  );
}
