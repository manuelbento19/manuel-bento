"use client"
import { Button } from "./button";

type Props = {
  claps: number;
}

export function Claps({ claps }:Props) {

  return (
    <Button variant={"secondary"} className="flex items-center gap-2 py-2 px-4 rounded-full shadow-lg fixed right-4 bottom-4 ">
      <span className="text-xl">👏</span>
      <span className="text-md">{claps}</span>
    </Button>
  );
}
