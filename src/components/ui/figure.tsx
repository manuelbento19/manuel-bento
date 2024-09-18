import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React, { useEffect, useRef, useState } from "react";

export const LazyFigure = React.forwardRef<ImageProps,ImageProps>(({className,alt,...rest})=>{
    const [visible,setVisibe] = useState(false);
    const imageRef = useRef<HTMLImageElement | null>(null);

    useEffect(()=>{
        const observer = new IntersectionObserver((observers)=>{
            const myImage = observers[0];
            if(myImage.isIntersecting)
            setVisibe(true) 
        })
        
        if(imageRef.current){
            observer.observe(imageRef.current);
        }
        return () => observer.unobserve(imageRef.current!)

    },[])

    return (
        <figure>
            {visible && <Image ref={imageRef} className={cn("bg-gray-200",className)} {...rest} alt={alt}/>}
        </figure>
    )
});

LazyFigure.displayName = "LazyFigure"
