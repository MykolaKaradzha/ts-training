import React, {useCallback, useMemo, useState} from "react";
import Rating from "../components/Rating/Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'useStateUpgraded hook example',
} 


export const useStateUpgradedExampleComponent = () => {
    const generateData = () => {
        console.log('Data generated')
        // difficult operations
        let fake = 0;
        let number = 0;
        while (fake < 10000000000) {
            fake += 1;
            number +=2
        }
        return number
    }
    let initValue = generateData() // if initValue will be passed to useState as initial value, then this value will be
    // recalculated each time state is changed. If we pass function as initial state - then value returned will be memorized
    // just as in useMemo() usage.
    const [counter, setCounter] = useState(generateData) //
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
        )

}

