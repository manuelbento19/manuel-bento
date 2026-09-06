"use server"
import { Redis } from "@upstash/redis";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

const { UPSTASH_REDIS_REST_URL: upstashUrl, UPSTASH_REDIS_REST_TOKEN: upstashToken } = process.env;
const redis = upstashUrl && upstashToken ? new Redis({ url: upstashUrl, token: upstashToken }) : null;

export type ClapResult =
  | { status: "success"; count: number }
  | { status: "duplicate"; count: number }
  | { status: "error"; message: string };

export async function getClaps(slug: string) {
  if (!redis) return 0;
  const claps = (await redis.get<number>(`claps:${slug}`)) || 0;
  return claps;
}

export async function clap(slug: string): Promise<ClapResult> {
  try {
    if (!redis) {
      return { status: "error", message: "clap.error" };
    }

    const hash = await getHash();

    const hours = 24, minutes = 60, seconds = 60;

    const isNewClap = await redis.set(`deduplicate:claps:${hash}:${slug}`, true, {
      nx: true,
      ex: hours * minutes * seconds
    });

    if (isNewClap) {
      const count = await redis.incr(`claps:${slug}`);
      revalidatePath(`/articles/${slug}`);
      return { status: "success", count };
    }

    const count = await getClaps(slug);
    return { status: "duplicate", count };
  } catch {
    return { status: "error", message: "clap.error" };
  }
}

async function getHash() {
  const header = await headers();
  const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(ip));
  const hash = Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
  return hash;
}
