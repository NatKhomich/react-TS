import React, {useEffect, useState} from "react";
import styles from '../Clock.module.css'

export const AnalogClock = () => {

    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)
        return () => clearInterval(interval) //зачистка
    }, [])

    return (
        <div className={styles.clock}>
            <h3> Current Date and Time: </h3>
            <span> {currentTime.toLocaleString()} </span>
        </div>
    )
};