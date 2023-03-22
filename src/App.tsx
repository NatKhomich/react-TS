import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Rating} from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';

function App() {
    return (
        <div>
            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />

            {/*<Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>

            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}

        </div>
    );
}

export default App;
