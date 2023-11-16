import React, {useState} from 'react';
import OnOff from "components/Switch/OnOff";
import {SwitchMUI} from "components/Switch/SwitchMUI";
import styles from './Switch.module.css'

export const Switch = () => {
       const [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={styles.root}>
            <OnOff on={switchOn} onChange={setSwitchOn} />
            <SwitchMUI on={switchOn} onChange={setSwitchOn} />
        </div>
    );
};
