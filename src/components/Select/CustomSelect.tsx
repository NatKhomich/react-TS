import React, {useState, KeyboardEvent, useEffect} from 'react';
import {ItemsType} from '../Accordion/Accordion';
import s from './Select.module.css'


type PropsType = {
    selectValue: any
    setSelectValue: (value: any) => void
    items: ItemsType[]
}

export const CustomSelect = (props: PropsType) => {
    const {selectValue, setSelectValue, items} = props

    const [active, setActive] = useState(false)
    const [hover, setHover] = useState(selectValue)

    const selectedItem = items.find(el => el.value === selectValue)
    const hoverItem = items.find(el => el.value === hover)

    useEffect(() => {
        setHover(selectValue)
    }, [selectValue])

    const toggleItems = () => setActive(!active)

    const onItemClickHandler = (value: any) => {
        setSelectValue(value)
        toggleItems()
    }

    const onKeyUpHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' ||e.key === 'ArrowUp') {
            for (let i = 0; i < items.length; i++) {
                if (items[i].value === hover) {
                    const pretendElement = e.key === 'ArrowDown'
                    ? items[i+1]
                        : items[i-1]

                    if (pretendElement) {
                        props.setSelectValue(pretendElement.value)
                        return
                    }
                }
            }
            if(!selectedItem) {
                props.setSelectValue(items[0].value)
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

            {active && <div className={s.items}>
                    {
                        items.map(el => <div onMouseEnter={() => setHover(el.value)}
                                                className={s.item + ' ' + (hoverItem === el ? s.selected : '')}
                                                onClick={() => onItemClickHandler(el.value)}
                                                key={el.value}>{el.title}
                    </div>)
                    }
                </div>}
        </div>
    );
};