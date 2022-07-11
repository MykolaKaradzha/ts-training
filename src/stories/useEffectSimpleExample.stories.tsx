import React, {useCallback, useEffect, useMemo, useState} from "react";
import Rating from "../components/Rating/Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'useEffect simple example',
} 


export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('component rendered')

    useEffect(() => {
        console.log('every time')
        document.title = counter.toString();
    })
    useEffect(() => {
        console.log('only first render(componentDidMount)')
        document.title = counter.toString();
    }, [])
    useEffect(() => {
        console.log('first render and every counter change')
        document.title = counter.toString();
    }, [counter])
    return (
        <>
            <button onClick={() => setCounter(counter + 1)}>+</button> {counter}
            <button onClick={() => setFake(fake + 1)}>+</button> {fake}
        </>
        )
}

