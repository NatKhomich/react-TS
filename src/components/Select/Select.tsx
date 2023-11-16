import React, {useState} from 'react';
import {SelectMUI} from "components/Select/SelectMUI";
import {ItemsType} from "components/Accordion/Accordion";
import {CustomSelect} from "components/Select/CustomSelect";


const items: ItemsType[] = [
    {title: 'Moskow', value: 1},
    {title: 'Kursk', value: 2},
    {title: 'Astana', value: 3},
]

const Select = () => {

    let [selectValue, setSelectValue] = useState('')

    return (
        <div>
            <CustomSelect selectValue={selectValue} setSelectValue={setSelectValue} items={items} />
            <SelectMUI />
        </div>
    );
};

export default Select;