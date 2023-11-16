import React from 'react';
import {AnalogClock} from "components/Clock/AnalogClock/AnalogClock";
import {DigitalClock} from "components/Clock/DigitalClock/DigitalClock";
import styles from './Clock.module.css'

export const Clock = () => {
    return (
        <div className={styles.root}>
            <AnalogClock/>
            <DigitalClock/>
        </div>
    );
};




