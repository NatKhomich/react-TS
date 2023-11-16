import * as React from 'react';
import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const SwitchMUI = (props: PropsType) =>  {
    const {on, onChange} = props

    return (
        <div style={{marginTop: '40px'}}>
            <Switch {...label} defaultChecked checked={on}
                    onClick={ () => onChange(!on) } />
        </div>
    );
}