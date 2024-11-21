"use client"
import { useState } from "react";
import { Button } from "../button";
import { clap } from "@/actions/claps";

type Props = {
    claps: number;
    slug: string;
}

export function ClapButton({ claps, slug }:Props) {
    const [loading, setLoading] = useState(false); 

    const onClap = async () => {
        if (loading) return; 
        setLoading(true);

        try {
            await clap(slug);
        } catch (error) {

        } finally {
            setLoading(false);
        }
    };
    return (
        <Button 
            onClick={onClap} 
            variant={"secondary"} 
            disabled={loading}
            className={`flex hover:-translate-y-1 hover:transition items-center gap-2 py-2 px-4 rounded-full shadow-lg fixed right-4 bottom-4 disabled:opacity-50 disabled:cursor-not-allowed`}
        >
            <span className="text-xl">👏</span>
            <span className="text-md">{claps}</span>
        </Button>
    );
}
