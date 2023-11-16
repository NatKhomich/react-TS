import React, {useState} from 'react';
import {CustomRating, RatingValueType} from "components/Rating/CustomRating";
import {RatingMui} from "components/Rating/RatingMUI";
import styles from './Rating.module.css'

const Rating = () => {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    return (
        <div className={styles.root}>
            <CustomRating value={ratingValue} onClick={setRatingValue} />

            <RatingMui value={ratingValue} onChange={setRatingValue} />
        </div>
    );
};

export default Rating;