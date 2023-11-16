import React from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

const OnOff = (props: PropsType) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const onClickOnHandler = () => {
        props.onChange(true)
    }

    const onClickOffHandler = () => {
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={ onClickOnHandler }> On </div>
            <div style={offStyle} onClick={ onClickOffHandler }> Off </div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;

