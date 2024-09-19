"use client"
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import Image, { ImageProps } from "next/image";
import React, { useEffect, useRef, useState } from "react";

type Props = ImageProps & {
    figureClass?: ClassValue;
}

export const LazyFigure = React.forwardRef<Props,Props>(({className, figureClass,alt,...rest})=>{
    const [visible,setVisibe] = useState(false);
    const figureRef = useRef<HTMLImageElement | null>(null);

    useEffect(()=>{
        const observer = new IntersectionObserver((observers)=>{
            const myImage = observers[0];
            if(myImage.isIntersecting)
            setVisibe(true) 
        })
        
        if(figureRef.current){
            observer.observe(figureRef.current);
        }
        return () => observer.disconnect()
    },[figureRef])

    return (
        <figure ref={figureRef} className={cn("relative",figureClass)}>
            {visible ? <Image className={cn("size-full",className)} {...rest} alt={alt}/>: (
                <div className="absolute inset-0 figure"/>
            )}
        </figure>
    )
});

LazyFigure.displayName = "LazyFigure"
