import React, {useState} from 'react';
import './App.css';
import {Header} from 'components/Header/Header';
import {Sidebar} from "components/Sidebar/Sidebar";
import {Clock} from "components/Clock/Clock";
import {Route, Routes} from "react-router-dom";
import Rating from "components/Rating/Rating";
import {Switch} from "components/Switch/Switch";
import Select from "components/Select/Select";
import {PaginationContainer} from "components/Pagination/PaginationContainer";
import {InputTypeFile} from "components/InputFile/InputTypeFile";
import {HomePage} from "components/HomePage/HomePage";


function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleDrawer = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <Header toggleDrawer={toggleDrawer}/>
            <Sidebar onClose={toggleDrawer} isOpen={isSidebarOpen}/>

            <div className={'wrapper'}>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/clock" element={<Clock/>}/>
                    <Route path="/switch" element={<Switch/>}/>
                    <Route path="/rating" element={<Rating/>}/>
                    <Route path="/select" element={<Select/>}/>
                    <Route path="/pagination" element={<PaginationContainer/>}/>
                    <Route path="/file" element={<InputTypeFile/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
