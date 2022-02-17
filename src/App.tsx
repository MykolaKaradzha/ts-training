import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating, {RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/unControlledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";
import UnControlledOnOff from "./components/OnOff/unControlledOnOff";


type PageTitlePropsType = {
    title:string;
}

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const [rating, setRating] = useState<RatingValueType>(0)
    const [working, setWorking] = useState<boolean>(true)

    return (
        <div className="wrapper">
            <Rating value={rating} onClick={setRating}/>
            <Accordion titleValue={"Menu"} collapsed={collapsed} onClick={setCollapsed}/>
            <UnControlledAccordion titleValue={"Title"}/>
            <OnOff working={working} setWorking={setWorking}/>
            <UnControlledOnOff onChange={setWorking}/> {`${working}`}
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    )
}

export default App;
