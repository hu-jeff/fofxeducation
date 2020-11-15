import MathSection from './MathSection'
import './App.css';
import React from "react";
import Title from "./Title";

function App() {
    return (
        <div className="App">
            <Title title={'MATH HELPER'}/>

            <div className={'sectionContainer'}>
                <MathSection level={10}/>
                <MathSection level={20}/>
                <MathSection level={30}/>
                <MathSection level={31}/>
            </div>
        </div>
    );
}

export default App;
