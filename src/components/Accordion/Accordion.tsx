import React from "react";
import {findAllByDisplayValue} from "@testing-library/react";

type AccordionPropsType = {
    titleValue: string;
    collapsed?: boolean;
}
type AccordionTitlePropsType = {
    title: string;
}


export function Accordion(props: AccordionPropsType) {
    return <>
    <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody/>}
    </>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>
}

function AccordionBody() {
    return (
        <>
            <div>Menu</div>
            <div>Feed</div>
            <div>News</div>
        </>

    )

}