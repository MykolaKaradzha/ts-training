import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import Rating from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";

type PageTitlePropsType = {
    title:string;
}

function App() {
    return (

        <div>
            <OnOff working={true}/>
            {/*<PageTitle title={"This is App component!"}/>*/}
            {/*<PageTitle title={"Boyyyyzzz"}/>*/}
            {/*<Accordion titleValue={"Menu"} collapsed={false}/>*/}
            {/*<Accordion titleValue={"Users"} collapsed={true}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

function PageTitle(props: PageTitlePropsType) {
    return (
        <div>{props.title}</div>
    )
}

export default App;
