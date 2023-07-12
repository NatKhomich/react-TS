import React, {useEffect, useState} from 'react';

export const UseEffect = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('components useEffect')

    useEffect( () => {
        console.log('useEffect')

        document.title = counter.toString()

        //useEffect - хук, замкняющий методы жизн цикла, управляет сайд эффектами
        //api.getUsers().then('') - запрос на сервер
        //setInterval - ассинхронные ф-ии
        //setTimeOut
        //indexedDB - раб с базой данных
        //document.getElementByID - обращение к document напрямую
        //document.title = 'User'
    }, [counter] )

    return (
        <div>
            Hello, {fake} /// {counter}
            <button onClick={() => setFake(fake + 1)}> + </button>
        </div>
    );
};
