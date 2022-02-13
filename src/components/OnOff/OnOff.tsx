import React from 'react';
import s from './OnOff.module.css'

type propsType ={
    working: boolean;
}

const OnOff = (props: propsType) => {
    return (
        <section className={s.wrapper}>
            <div className={`${props.working && s.switched_on}`}>ON</div>
            <div className={`${!props.working && s.switched_off}`}>OFF</div>
            <div className={`${s.circle} ${props.working && s.switched_on} ${!props.working && s.switched_off}`}></div>
        </section>
    );
};

export default OnOff;