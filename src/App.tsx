import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';
import Accordion from './components/Accordion/Accordion';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)

    return (
        <div className={'App'}>

            <OnOff on={switchOn} onChange={ (on)=> { setSwitchOn(on) } }/>
            {/*<UncontrolledOnOff />*/}

            <Accordion titleValue={'--User--'}
                       collapsed={accordionCollapsed}
                       onClick={ ()=> {setAccordionCollapsed(!accordionCollapsed)}}/>
            {/*<UncontrolledAccordion titleValue={'--Menu--'}/>*/}

            <UncontrolledRating/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
        </div>
    );
}

export default App;
