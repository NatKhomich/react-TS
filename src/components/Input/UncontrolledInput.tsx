import React, {ChangeEvent, useRef, useState} from 'react';

export const UncontrolledInput = () => {
    return (
        <input />
    );
};

export const TrackValueUncontrolledInput = () => {

    const [value, setValue] = useState('')

    const onChangeValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue( e.currentTarget.value )
    }

    return (
       <div>
           <input value={value}
                  onChange={ onChangeValueInputHandler }
           />
           {value}
       </div>
    )
}

export const GetValueUncontrolledInputByButtonSend = () => {

    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const onClickButtonValueHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return (

        <div>
            <input ref={inputRef}/>
            <button onClick={ onClickButtonValueHandler }> Send </button>
            uncontrolled input
           - actual value: {value}
        </div>
    )
}