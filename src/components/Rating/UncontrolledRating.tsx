import React, {useState} from "react";

type RatingPropsType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected?: boolean
    setValue:  (value:RatingPropsType) => void
    newValue: RatingPropsType


}

function Rating() {
    const [value, setValue] = useState<RatingPropsType>(0);
    return <div>
        <Star selected={value > 0} setValue={setValue} newValue={1}/>
        <Star selected={value > 1} setValue={setValue} newValue={2}/>
        <Star selected={value > 2} setValue={setValue} newValue={3}/>
        <Star selected={value > 3} setValue={setValue} newValue={4}/>
        <Star selected={value > 4} setValue={setValue} newValue={5}/>


    </div>


    function Star(props: StarPropsType) {
        const onClickHandler = () => {
            setValue(props.newValue)
        }
         return <span onClick={onClickHandler}>
             {props.selected ? <b>star </b> : 'star '}
         </span>
        }


}

export default Rating;