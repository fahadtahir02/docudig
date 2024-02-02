// This file is solely for enhancing our use of tailwind twMerge and clsx are whats important here


import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return (
        //tWMerge
        //If padding of right and left are same twMerge allows us to say p-2 padding of left and right are both 2
        //px-2, py-2 => p-2 
        //clsx - helps with merging multiple tailwind calls confilict
        //Tailwind order matters with clsx 
        twMerge(clsx(inputs))
    )
}