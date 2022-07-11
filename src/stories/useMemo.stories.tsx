import React, {useMemo, useState} from "react";


export default {
    title: 'UseMemo hook example',
} 


export const useMemoExampleComponent = () => {
    const [A, setA] = useState<number>(5)
    const [B, setB] = useState<number>(5)



    let resultA = useMemo(() => {
        let fake = 0;
        while (fake < 10000000000) {
            fake += 1;
        }
        let tempA = 1;
        for (let i = 1; i <= A; i++) {tempA *= i}
        return tempA;
    }, [A])
    let resultB = () => {
        let tempB = 1;
        for (let i = 1; i <= B; i++) {tempB *= i}
        return tempB;
    }




    return (
        <>
            <input type="text" value={A} onChange={(e)=> setA(Number(e.currentTarget.value))}/>
            <input type="text" value={B} onChange={(e)=> setB(Number(e.currentTarget.value))}/>
            <hr/>
            <div>Result for A:{resultA}</div>
            <div>Result for B:{resultB()}</div>
        </>
        )

}

