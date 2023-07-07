import React, {useState} from 'react';

const generateData = () => {
    return 2665435678
}


export const UseState = () => {

   // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => {
        return state + 1
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}> + </button>
            <button onClick={() => setCounter(changer)}> + </button>
            {counter}
        </div>
    );
};

