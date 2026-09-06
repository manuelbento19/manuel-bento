"use client"
import { useState } from "react";
import { Button } from "../button";
import { type ClapResult, clap } from "@/actions/claps";
import { useTranslations } from "next-intl";
import { toast } from "sonner";

type Props = {
  claps: number;
  slug: string;
};

type Feedback = "loading" | "success" | "duplicate" | "error" | null;

export function ClapButton({ claps, slug }: Props) {
  const t = useTranslations("claps");
  const [count, setCount] = useState(claps);
  const [feedback, setFeedback] = useState<Feedback>(null);

  const onClap = async () => {
    if (feedback === "loading") return;
    setFeedback("loading");
    setCount((c) => c + 1);

    try {
      const result: ClapResult = await clap(slug);
      if (result.status === "success") {
        toast.success(t("clapped"));
      } else if (result.status === "duplicate") {
        setCount(result.count);
        toast.info(t("alreadyClapped"));
      } else {
        setCount((c) => c - 1);
        toast.error(t("error"));
      }
    } catch {
      setCount((c) => c - 1);
      toast.error(t("error"));
    } finally {
      setFeedback(null);
    }
  };

  return (
    <div className='fixed right-4 bottom-4 flex flex-col items-end gap-1'>
      <Button
        onClick={onClap}
        variant={"secondary"}
        disabled={feedback === "loading"}
        aria-label={t("ariaLabel")}
        aria-live='polite'
        className={`flex hover:-translate-y-1 hover:transition items-center gap-2 py-2 px-4 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <span className='text-xl'>👏</span>
        <span className='text-md'>{count}</span>
      </Button>
    </div>
  );
}