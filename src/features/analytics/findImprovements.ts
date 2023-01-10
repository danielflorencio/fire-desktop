
// Import the store useAppSelector and useAppDispatch hooks

// Load the data from the redux store

// Just a quick note: findImprovements() needs to be an async function.
// Similar to the stockMarket api requests, while the improvements are not loading,
// the user needs to see a message saying to "wait while we find the improvements to do in your finances" or something along these lines. 

// Now about the real world use of the applications, it would make sense if we made an api call to the plaid application in order to get this initial data. 
// This would allow us to show improvements to the user faster and more accurately.

export default function findImprovements(){ 

    const improvements: string[] = []

    // Implement the data structures and algorithms in order to analyze that data and find possible improvements

    // conditionals and for loops
    // improvements = [...improvements, newImprovement]

    return improvements;

}