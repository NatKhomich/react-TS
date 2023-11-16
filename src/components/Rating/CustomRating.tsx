import React from 'react';
import star from './star.png'
import style from './Rating.module.css'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type PropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export function CustomRating(props: PropsType) {

    return (
        <div className={style.rating}>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}


type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

function Star(props: StarPropsType) {

    const onClick = () => {
        props.onClick(props.value)
    }

    return <span onClick={onClick}>
            <img src={star} alt={'star'} className={props.selected ? style.imgActive : style.img}/>
        </span>
}