import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {
    GetValueUncontrolledInputByButtonSend,
    TrackValueUncontrolledInput,
    UncontrolledInput
} from './components/Input/UncontrolledInput';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={'App'}>

            {/*<UncontrolledOnOff />*/}
            <OnOff on={switchOn} onChange={ (on)=> { setSwitchOn(on) } }/>


            {/*<UncontrolledAccordion titleValue={'--Menu--'}/>*/}
            <Accordion titleValue={'--User--'}
                       collapsed={accordionCollapsed}
                       onClick={ ()=> {setAccordionCollapsed(!accordionCollapsed)}}/>


            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>

           {/* <UncontrolledInput />*/}
            <TrackValueUncontrolledInput />
            <GetValueUncontrolledInputByButtonSend />
        </div>
    );
}

export default App;
