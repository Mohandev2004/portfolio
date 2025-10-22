import React  from "react";
import { cn } from "@/lib/utils";

export const Container = ({
    children,
    className,
}: {
    children : React.ReactNode,
    className? : string;
    }
) =>{
    return <div className={cn("mx-auto max-w-4xl w-full bg-black", className)}>{children}</div>;
    
};