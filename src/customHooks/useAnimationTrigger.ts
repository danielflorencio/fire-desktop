import { useEffect, useState } from "react";
export function useAnimationTrigger({isScreenSize, trueClasses, falseClasses}: {isScreenSize: boolean, trueClasses: string, falseClasses: string}): string{
    const [classes, setClasses] = useState('')
    useEffect(()=>{
        if(isScreenSize){
            setClasses(trueClasses)
        }else{
            setClasses(falseClasses)
        }
    
    },[isScreenSize])
    return classes
}