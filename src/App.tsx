import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import {UnControlledAccordion} from "./components/Accordion/unControlledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";


type PageTitlePropsType = {
    title:string;
}

function App() {
    return (

        <div>
            <UnControlledAccordion titleValue={"Title"}/>
            {/*<OnOff working={true}/>*/}
            {/*<PageTitle title={"This is App component!"}/>*/}
            {/*<PageTitle title={"Boyyyyzzz"}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
            <UncontrolledRating value={1}/>

        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    )
}

export default App;
