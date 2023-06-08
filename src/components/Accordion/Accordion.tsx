import React from 'react';

export type ItemsType = {
    title: string
    value: number
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onClick: () => void
    onClickItem: (value: number) => void
    items: ItemsType[]
}


function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={props.onClick}/>
            {!props.collapsed && <AccordionBody items={props.items}
                                                onClick={props.onClickItem}

            />}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

type AccordionBodyType = {
    items: ItemsType[]
    onClick: (value: number) => void
}

function AccordionBody(props: AccordionBodyType) {
    return (
        <ul>
            {props.items.map(el => {
                return (
                    <li key={el.value} onClick={() => props.onClick(el.value)}>
                        {el.value} {el.title}
                    </li>
                )
            })}
        </ul>
    )
}

export default Accordion;