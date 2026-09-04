"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "../button";
import { type ClapResult, clap } from "@/actions/claps";
import { useTranslations } from "next-intl";

type Props = {
  claps: number;
  slug: string;
};

type Feedback =
  | { type: "loading" }
  | { type: "success" }
  | { type: "duplicate" }
  | { type: "error" }
  | null;

export function ClapButton({ claps, slug }: Props) {
  const t = useTranslations("claps");
  const [count, setCount] = useState(claps);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const showFeedback = (next: Feedback) => {
    setFeedback(next);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setFeedback(null), 2000);
  };

  const onClap = async () => {
    if (feedback?.type === "loading") return;
    showFeedback({ type: "loading" });

    try {
      const result: ClapResult = await clap(slug);
      if (result.status === "success") {
        setCount(result.count);
        showFeedback({ type: "success" });
      } else if (result.status === "duplicate") {
        setCount(result.count);
        showFeedback({ type: "duplicate" });
      } else {
        showFeedback({ type: "error" });
      }
    } catch {
      showFeedback({ type: "error" });
    }
  };

  const feedbackLabel = {
    loading: t("clapping"),
    success: t("clapped"),
    duplicate: t("alreadyClapped"),
    error: t("error")
  } as const;

  return (
    <div className='fixed right-4 bottom-4 flex flex-col items-end gap-1'>
      <Button
        onClick={onClap}
        variant={"secondary"}
        disabled={feedback?.type === "loading"}
        aria-label={t("ariaLabel")}
        aria-live='polite'
        className={`flex hover:-translate-y-1 hover:transition items-center gap-2 py-2 px-4 rounded-full shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <span className='text-xl'>👏</span>
        <span className='text-md'>{count}</span>
      </Button>
      {feedback && (
        <span
          role='status'
          className={`text-[10px] max-w-[140px] text-right ${
            feedback.type === "error" ? "text-red-600" : "text-muted-foreground"
          }`}
        >
          {feedbackLabel[feedback.type]}
        </span>
      )}
    </div>
  );
}