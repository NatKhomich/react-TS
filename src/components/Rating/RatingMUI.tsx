import React from 'react';
import {Rating} from "@mui/material";
import {RatingValueType} from "components/Rating/CustomRating";

export type PropsType = {
    value: RatingValueType
    onChange: (value: RatingValueType) => void
}

export const RatingMui = (props: PropsType) => {
    const {value, onChange} = props

    return (
        <Rating name="size-large"
                defaultValue={2}
                size="large"
                value={value}
                onChange={(event, newValue) => {
                    if (newValue !== null) {
                        onChange(newValue as RatingValueType);
                    }
                }}
        />
    );
};
