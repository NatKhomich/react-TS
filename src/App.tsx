import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from 'components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import Accordion, {ItemsType} from './components/Accordion/Accordion';
import {ControlledCheckbox, ControlledInput, ControlledSelect} from 'components/Input/ControlledInput';
import Select from './components/Select/Select';
import {UncontrolledAccordion} from 'components/Accordion/UncontrolledAccordion';
import {ExampleUseMemo, HelpsReactMemo} from 'components/Memo/UseMemo';
import Example from './components/Memo/ReactMemo';
import {UseCallBack} from 'components/Memo/UseCallBack';
import {UseState} from 'components/UseState/UseState';
import {KeysTrackerExample, UseEffect} from 'components/UseEffect/UseEffect';
import {AnalogClock, DigitalClock} from 'components/Clock/Clock';
import {Header} from 'components/Header/Header';
import {Sidebar} from "components/Sidebar/Sidebar";


export type Anchor = 'left'

function App() {

    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    const toggleDrawer = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)

    let [switchOn, setSwitchOn] = useState(false)

    const items: ItemsType[] = [
        {title: 'Natalia', value: 1},
        {title: 'Alex', value: 2},
        {title: 'Bonya', value: 3},
    ]

    let [selectValue, setSelectValue] = useState('')

    return (
        <div>
            <Header toggleDrawer={toggleDrawer} />
            <Sidebar onClose={toggleDrawer} isOpen={isSidebarOpen} />

            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>

            <Accordion titleValue={'--User--'}
                       collapsed={accordionCollapsed}
                       onClick={() => setAccordionCollapsed(!accordionCollapsed)}
                       onClickItem={(value) => console.log(value)}
                       items={items}
            />

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UncontrolledAccordion titleValue={'--Family--'}/>

            <ControlledInput/>
            <ControlledCheckbox/>
            <ControlledSelect/>


            <Select items={items}
                    selectValue={selectValue}
                    setSelectValue={(value) => setSelectValue(value)}/>


            <Example/>

            <ExampleUseMemo/>

            <HelpsReactMemo/>

            <UseCallBack/>

            <UseState/>

            <UseEffect/>
            <KeysTrackerExample />

            <AnalogClock/>
            <DigitalClock />
        </div>
    );
}

export default App;
