"use client"
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image, { ImageProps } from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";

type Props = ImageProps & {
    figureClass?: ClassValue;
}

export const LazyFigure = (({className, figureClass,alt,...rest}:Props) =>{
    const [visible,setVisibe] = useState(false);
    const figureRef = useRef<HTMLImageElement | null>(null);

    const loadImage = useCallback(()=>{
        const image = document.createElement("img")
        image.src = rest.src as string;
        image.onload = () => setVisibe(true);
    },[rest.src])

    useEffect(()=>{
        const observer = new IntersectionObserver((observers)=>{
            const myImage = observers[0];
            if(myImage.isIntersecting)
            loadImage()
        })
        
        if(figureRef.current){
            observer.observe(figureRef.current);
        }
        return () => observer.disconnect()
    },[figureRef, loadImage])

    return (
        <figure ref={figureRef} className={cn("relative",figureClass)}>
            {visible ? <Image className={cn("size-full",className)} {...rest} alt={alt}/>: (
                <div className="absolute inset-0 figure"/>
            )}
        </figure>
    )
});