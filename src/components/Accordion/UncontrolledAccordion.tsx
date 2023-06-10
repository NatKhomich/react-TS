import React, {useReducer} from 'react';

type AccordionPropsType = {
    titleValue: string
    //collapsed: boolean
}

/*type ActionType = {
    type: string
}*/


export function UncontrolledAccordion(props: AccordionPropsType) {

    const reducer = (state: boolean, action: ChangeCollapsedAC): boolean => {
       switch (action.type) {
           case 'TOGGLE-COLLAPSED': {
               return !state
           }
           default: return state
       }
    }

    // let [collapsed, setCollapsed] = useState( false )
    let [collapsed, dispatch] = useReducer(reducer, false)

  type ChangeCollapsedAC = ReturnType<typeof changeCollapsedAC>

    const changeCollapsedAC = () => {
        return {
            type: 'TOGGLE-COLLAPSED'
        } as const
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {dispatch(changeCollapsedAC())
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}> {props.title} </h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
