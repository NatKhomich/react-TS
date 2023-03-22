import React from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/Accordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/Rating/UncontrolledRating';

function App() {
    return (
        <div className={'App'}>

            <OnOff />

            <Accordion titleValue={'--User--'} collapsed={false} />
            <UncontrolledAccordion titleValue={'--Menu--'} />

            <Rating value={3} />
            <UncontrolledRating />
        </div>
    );
}

export default App;
