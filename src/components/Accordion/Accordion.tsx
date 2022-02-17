import React from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean;
    onClick: (collapsed: boolean) => void
}
type AccordionTitlePropsType = {
    title: string;
    onClick: (collapsed: boolean) => void
    collapsed: boolean
}


export function Accordion(props: AccordionPropsType) {

    return <>
    <AccordionTitle title={props.titleValue} onClick={props.onClick} collapsed={props.collapsed}/>
        {!props.collapsed && <AccordionBody/>}
    </>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickHandler = () => {
        props.onClick(!props.collapsed)
    }
    return <h3 onClick={onClickHandler}>{props.title}</h3>
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