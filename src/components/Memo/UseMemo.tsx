import React, {useMemo, useState} from 'react';

export const ExampleUseMemo = () => {

    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

  /* resultA = useMemo(()=> {
       let tempResultA = 1
       for(let i = 1; i <= a; i++) {
           let fake = 0
           while(fake < 100000000) {
               fake++
               const fakeValue = Math.random()
           }
           tempResultA = tempResultA * i
       }
       return tempResultA
   }, [a])*/

    for(let i = 1; i <= a; i++) {
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


export const DifficultCountingExample = () => {
    return (
        <div>

        </div>
    )
}

const UsersSecret = (props: {users: Array<string>}) => {
    console.log('Users')
    return (
        <div>
            {props.users.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Natalia', 'Alex', 'Bonya'])

    const newArray = useMemo( ()=> {
        return users.filter( el => el.toLowerCase().indexOf('l') > -1 )
    },[users] )

    return (
        <div>
            <button onClick={()=> setCounter(counter+1)}> + </button>
            {counter}
            <Users users={newArray}/>
        </div>
    );
};