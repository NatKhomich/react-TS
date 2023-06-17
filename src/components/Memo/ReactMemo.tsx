import React, {useState} from 'react';

const Counter = (props: {count: number}) => {
    return <div> {props.count} </div>
}

const NewUsersSecret = (props: {users: Array<string>}) => {
    console.log('NewUsersSecret')
    return (
        <div>
            {props.users.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    )
}

const Users = React.memo(NewUsersSecret)

const Example = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Natalia', 'Alex', 'Bonya'])

    return (
        <div>
            <button onClick={()=> setCounter(counter+1)}> + </button>
            <Counter count={counter} />
            <Users users={users}/>
        </div>
    );
};

export default Example;