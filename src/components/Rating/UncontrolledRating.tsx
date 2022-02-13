import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
};
type StarPropsType = {
    selected?: boolean;
}

function Rating(props: RatingPropsType) {
    const [value, setValue] = useState<string>("0");
    const convertedValue = parseInt(value);
    const onClickRatingHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setValue(event.currentTarget.value)
    }
    return <div>
        <Star selected={convertedValue > 0}/><button onClick={onClickRatingHandler} value={1}>1</button>
        <Star selected={convertedValue > 1}/><button onClick={onClickRatingHandler} value={2}>2</button>
        <Star selected={convertedValue > 2}/><button onClick={onClickRatingHandler} value={3}>3</button>
        <Star selected={convertedValue > 3}/><button onClick={onClickRatingHandler} value={4}>4</button>
        <Star selected={convertedValue > 4}/><button onClick={onClickRatingHandler} value={5}>5</button>

    </div>


    function Star(props: StarPropsType) {
        if (props.selected) {
            return <span><b>star </b></span>
        } else {
            return <span>star </span>
        }

    }
}

export default Rating;