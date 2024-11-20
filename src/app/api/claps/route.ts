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