import React, {ChangeEvent, useState} from 'react';

export const ControlledInput = () => {

    const [parentValue, setParentValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }

    return (
        <input value={ parentValue } onChange={ onChangeInputHandler } />
    );
};


export const ControlledCheckbox = () => {

    const [parentCheck, setParentCheck] = useState(true)

    const onChangeCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentCheck(e.currentTarget.checked)
    }

    return (
        <div>
            <input type={'checkbox'} checked={parentCheck} onChange={ onChangeCheckedHandler } />
        </div>

    );
};

export const ControlledSelect = () => {

    const [parentSelect, setParentSelect] = useState<undefined | string>(undefined)

    const onChangeSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
       setParentSelect(e.currentTarget.value)
    }

    return (
        <div>
            <select value={parentSelect} onChange={onChangeSelectHandler} >
                <option> none </option>
                <option value="1"> Minsk </option>
                <option value="2"> Moscow </option>
                <option value="3"> Kiev </option>
            </select>
        </div>

    );
};
