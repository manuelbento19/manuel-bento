"use client"
import { useEffect, useState } from "react";
import { Button } from "../button";

export function Claps({ slug }:{slug: string;}) {
  const [claps,setClaps] = useState(0);

  useEffect(()=>{
    fetch(`/api/claps?slug=${slug}`)
      .then(request=>request.json())
      .then(result=>setClaps(result?.claps ?? 0));
  },[slug])

  return (
    <Button variant={"secondary"} className="flex hover:-translate-y-1 hover:transition items-center gap-2 py-2 px-4 rounded-full shadow-lg fixed right-4 bottom-4 ">
      <span className="text-xl">👏</span>
      <span className="text-md">{claps}</span>
    </Button>
  );
}
