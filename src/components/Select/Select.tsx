import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemsType} from '../Accordion/Accordion';
import s from './Select.module.css'

type SelectType = {
    items: ItemsType[]
    selectValue: any
    setSelectValue: (value: any) => void
}


const Select = (props: SelectType) => {

    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(props.selectValue)

    const selectedItem = props.items.find(el => el.value === props.selectValue)
    const hoverItem = props.items.find(el => el.value === hover)

    useEffect(() => {
        setHover(props.selectValue)
    }, [props.selectValue])

    const toggleItems = () => setActive(!active)

    const onItemClickHandler = (value: any) => {
        props.setSelectValue(value)
        toggleItems()
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' ||e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hover) {
                    const pretendElement = e.key === 'ArrowDown'
                    ? props.items[i+1]
                        : props.items[i-1]

                    if (pretendElement) {
                        props.setSelectValue(pretendElement.value)
                        return
                    }
                }
            }
            if(!selectedItem) {
                props.setSelectValue(props.items[0].value)
            }
        }
        if(e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={s.select} onKeyUp={onKeyUpHandler} tabIndex={0}>
            <span className={s.main}
                  onClick={toggleItems}>
                {selectedItem && selectedItem.title}
            </span>

            {active &&
                <div className={s.items}>
                    {props.items.map(el => <div onMouseEnter={() => setHover(el.value)}
                                                className={s.item + ' ' + (hoverItem === el ? s.selected : '')}
                                                onClick={() => onItemClickHandler(el.value)}
                                                key={el.value}>{el.title}</div>)}
                </div>}


        </div>
    );
};

export default Select;