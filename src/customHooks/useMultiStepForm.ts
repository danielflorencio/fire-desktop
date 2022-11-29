// Inside this custom hook we're gonna pass one single parameter.
// That parameter is gonna be an array of all of our different steps.
// Each step is a different component.

// The hook is gonna be responsible to make sure all the states work.

import { ReactElement, useState } from "react";

export function useMultiStepForm(steps: ReactElement[]){
    const [currentStepIndex, setCurrentStepIndex] = useState(0)


    function next(){
        setCurrentStepIndex(i => {
            if (i >= steps.length - 1) return i
            return i + 1
        })
    }
    function back(){
        setCurrentStepIndex(i => {
            if (i <= steps.length) return i // verify later if the logic is working
            return i - 1
        })
    }
    function goTo(index: number){
        setCurrentStepIndex(index)
    }

    return { // Notice that ts file returns aways need {} and not () different from tsx or jsx.
        currentStepIndex,
        step: steps[currentStepIndex],
        goTo,
        next,
        back,
    }
}