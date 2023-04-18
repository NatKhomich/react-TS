import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import Accordion, {ItemsType} from './components/Accordion/Accordion';
import {
    GetValueUncontrolledInputByButtonSend,
    TrackValueUncontrolledInput,
} from './components/Input/UncontrolledInput';
import {ControlledCheckbox, ControlledInput, ControlledSelect} from './components/Input/ControlledInput';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)

    const items: ItemsType[] = [
        {title: 'Natalia', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Bonya', value: 3},
    ]


    return (
        <div className={'App'}>

            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>

            <Accordion titleValue={'--User--'}
                       collapsed={accordionCollapsed}
                       onClick={() => {setAccordionCollapsed(!accordionCollapsed)}}
                       onClickItem={ (value)=> console.log(value) }
                       items={items}
            />


            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

            {/* <UncontrolledInput />*/}
            <TrackValueUncontrolledInput/>
            <GetValueUncontrolledInputByButtonSend/>
            <ControlledInput/>
            <ControlledCheckbox />
            <ControlledSelect />
        </div>
    );
}

export default App;
