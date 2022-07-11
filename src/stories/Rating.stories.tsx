import React from "react";
import Rating from "../components/Rating/Rating";
import {action} from "@storybook/addon-actions";

export default {
    title: 'Rating Component',
    component: Rating,
}

const callBack = action('rated')
export const RatingBaseExample = (props: any) => (
    <Rating value={5} onClick={callBack}/>
)