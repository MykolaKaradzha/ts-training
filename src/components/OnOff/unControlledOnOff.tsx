import React, {useState} from 'react';
import s from './OnOff.module.css'

type PropsType = {
    onChange: (working:boolean) => void

}

const UnControlledOnOff = (props: PropsType) => {
    //useState
    const [working, setWorking] = useState<boolean>(true)
    let onClickOnHandler = () => {
        setWorking(true)
        props.onChange(true)
    }
    let offClickOnHandler = () => {
        setWorking(false)
        props.onChange(false)
    }

    //styles
    const onStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        backgroundColor: working ? "green" : "white",
        margin: "5px",
        padding: "5px",
        border: "solid black 1px"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        display: "inline-block",
        backgroundColor: !working ? "red" : "white",
        margin: "5px",
        padding: "5px",
        border: "solid black 1px"
    }
    const circleStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        display: "inline-block",
        backgroundColor: working ? "green" : "red",
        marginLeft: "5px",
        border: "solid black 1px"
    }


    return (
        <section className={s.wrapper}>
            <div style={onStyle} onClick={onClickOnHandler}>ON</div>
            <div style={offStyle} onClick={offClickOnHandler}>OFF</div>
            <div style={circleStyle}></div>
        </section>
    );
};

export default UnControlledOnOff;