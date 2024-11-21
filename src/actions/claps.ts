"use server"
import { Redis } from "@upstash/redis";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";

const redis = Redis.fromEnv();

export async function getClaps(slug:string){
    const claps = (await redis.get<number>(`claps:${slug}`)) || 0;
    return claps
}

export async function clap(slug: string) {
    const hash = getHash();

    const hours = 24, minutes = 60, seconds = 60;
   
    const newClap = await redis.set(`deduplicate:claps:${hash}:${slug}`, true, {
        nx: true, 
        ex: hours * minutes * seconds
    });
    
    if (newClap) {
        await redis.incr(`claps:${slug}`); 
        revalidatePath(`/articles/${slug}`); 
    }
}

async function getHash(){
    const header = headers();
    const ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
    const buffer = await crypto.subtle.digest("SHA-256",new TextEncoder().encode(ip));
    const hash = Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");
    return hash;
}