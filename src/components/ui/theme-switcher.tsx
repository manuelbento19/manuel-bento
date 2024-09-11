"use client"
import { useTheme } from "next-themes"
import { Button } from "./button"
import {MoonIcon,SunIcon} from '@radix-ui/react-icons';

export default function ThemeSwitcher() {
    const {resolvedTheme,setTheme,theme} = useTheme();

    console.log(theme)
    const switchTheme = () => {
        setTheme(resolvedTheme==="light" ? "dark" : "light")
    }

    return (
        <Button size="sm" variant="ghost" onClick={switchTheme}>
            {resolvedTheme==="light" ? (
                <MoonIcon className="size-4 text-gray-700"/>
            ):
            (
                <SunIcon className="size-4 text-white"/>
            )}
        </Button>
    )
}
