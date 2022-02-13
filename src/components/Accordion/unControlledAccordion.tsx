import React, {useState} from "react";

type UnControlledAccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}
type AccordionTitlePropsType = {
    title: string
    setCollapsed: (collapsed:boolean) => void
    collapsed: boolean
}


export function UnControlledAccordion(props: UnControlledAccordionPropsType) {
    const [collapsed, setCollapsed] = useState<boolean>(true);


    return <>
    <AccordionTitle title={props.titleValue} setCollapsed={setCollapsed} collapsed={collapsed}/>
        {collapsed && <AccordionBody/>}
    </>
}

function AccordionTitle(props: AccordionTitlePropsType) {
    const onClickTitleHandler = () => {
        props.setCollapsed(!props.collapsed)
    }
    return <h3 onClick={onClickTitleHandler}>{props.title}</h3>
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