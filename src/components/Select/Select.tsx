import React, {useState} from 'react';
import {ItemsType} from '../Accordion/Accordion';
import s from './Select.module.css'

type SelectType = {
    selectValue: any
    onChange: (value: any) => void
    items: ItemsType[]
}


const Select = (props: SelectType) => {

    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(props.selectValue)

    const selectedItem = props.items.find(el => el.value === props.selectValue)
    const hoverItem = props.items.find(el => el.value === hover)

    const toggleItems = () => setActive(!active)

    const onItemClickHandler = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    return (
        <div className={s.select}>
            <span className={s.main}
                  onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </span>

            {active &&
                <div className={s.items}>
                    {props.items.map(el => <div onMouseEnter={()=> setHover(el.value)}
                                                className={s.item + ' ' + (hoverItem === el ? s.selected : '')}
                                                onClick={() => onItemClickHandler(el.value)}
                                                key={el.value}>{el.title}</div>)}
                </div>}


        </div>
    );
};

export default Select;