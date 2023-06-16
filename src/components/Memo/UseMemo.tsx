import React, {useState} from 'react';

export const ExampleUseMemo = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    for(let i = 1; i <= a; i++) {
        let fake = 0
        while(fake < 100000000) {
            fake++
            const fakeValue = Math.random()
        }
        resultA = resultA * i
    }

    for(let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return (
        <div>
            <input value={a} onChange={(e)=> setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e)=> setB(+e.currentTarget.value)}/>

            <div>Result for a: { resultA }</div>
            <div>Result for b: { resultB }</div>
        </div>
    )
}