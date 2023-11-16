import React, {FC} from 'react';
import {CountryType} from "components/Pagination/PaginationContainer";
import styles from '../Pagination.module.css'

type PropsType = {
    countries: CountryType[]
}

export const Countries: FC<PropsType> = ({countries}) => {

    return (
        <div style={{margin: '20px'}}>
            {countries.map((el, index) => (
                <div className={styles.countries} key={index}>{el.name.common}
                    <img src={el.flags.png} alt="flag" className={styles.imgCounty}/>
                </div>
            ))}
        </div>
    );
};

