import React, {useState} from 'react';
import {ItemsType} from '../Accordion/Accordion';
import s from './Select.module.css'

type SelectType = {
    selectValue: any
    onChange: (value: any)=> void
    items: ItemsType[]
}


const Select = (props: SelectType) => {

    const [active, setActive] = useState(true)

    const selectedItem = props.items.find(el => el.value === props.selectValue)

    return (
        <div className={s.select + ' ' + (active ? s.active : '')}
        onClick={()=> setActive(!active)}
        >
            <h3> {selectedItem && selectedItem.title} </h3>
            <div className={s.items}>
                {props.items.map(el => <div key={el.value}>{el.title}</div> )}
            </div>

        </div>
    );
};

export default Select;