import {Redis} from '@upstash/redis';
const redis = Redis.fromEnv();

export async function GET(request: Request){
    const {searchParams} = new URL(request.url);
    const slug = searchParams.get("slug");
    if(!slug) return Response.json({
        error: "Error while trying to get claps"
    },{status: 400})

    const claps = (await redis.get<number>(`claps:${slug}`)) || 0;
    return Response.json({claps})
}

export async function POST(request: Request){
    const {searchParams} = new URL(request.url);
    const slug = searchParams.get("slug");
    if(!slug) return Response.json({
        error: "Error while trying to get claps"
    },{status: 400})

    const ip = (request.headers.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0]
    const buffer = await crypto.subtle.digest("SHA-256",new TextEncoder().encode(ip));
    const hash = Array.from(new Uint8Array(buffer)).map((b) => b.toString(16).padStart(2, "0")).join("");

    const hours = 24, minutes = 60, seconds = 60;
   
    const newClap = await redis.set(`deduplicate:claps:${hash}:${slug}`, true, {
        nx: true, 
        ex: hours * minutes * seconds
    });
    if (newClap) {
        await redis.incr(`claps:${slug}`); 
        return Response.json({
            message: "Claps was successively registered"
        });
    }

    return Response.json({
        message: "New clap"
    })

}