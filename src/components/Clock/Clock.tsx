import React, {useEffect, useState} from 'react';
import './DigitalClock.css'


export const AnalogClock = () => {

    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(interval) //зачистка
    }, [])

    return (
        <div>
            <h3> Current Date and Time: </h3>
            <span> {currentTime.toLocaleString()} </span>
        </div>
    )
};

export const DigitalClock = () => {

    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(interval) //зачистка
    }, [])

    const secondsStyle = {
        transform: `rotate(${currentTime.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${currentTime.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${currentTime.getHours() * 30}deg)`
    };

    return (
        <div className={'clock'}>
            <div className={'analog-clock'}>
                <div className={'dial seconds'} style={secondsStyle}/>
                <div className={'dial minutes'} style={minutesStyle}/>
                <div className={'dial hours'} style={hoursStyle}/>
            </div>
            <div className={"digital-clock"}>
                {currentTime.toLocaleString()}
            </div>
        </div>
    )
}

