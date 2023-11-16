import React, {useEffect, useState} from 'react';
import {countryAPI} from "components/Pagination/api/countryAPI";
import {Countries} from "components/Pagination/Countries/Countries";
import {Pagination} from "components/Pagination/Pagination";

export type CountryType = {
    name: {common: string}
    flags: {png: string}

}

export const PaginationContainer = () => {
    const [countries, setCountries] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize] = useState(10)
    const [portionSizeButton] = useState(10)

    useEffect(() => {
        countryAPI.getCountry()
            .then((res) => {
                setCountries(res.data)
            })
            .catch(() => {
                console.log('ERROR')
            })
    }, [])

    const lastCountryIndex = currentPage * pageSize
    const firstCountryIndex = lastCountryIndex - pageSize

    const currentCountry = countries.slice(firstCountryIndex, lastCountryIndex)
    const totalItemsCount = countries.length


    const setCurrentPageHandler = (page: number) => {
        setCurrentPage(page)
    }

    return (
        <div>
            <h1>Countries</h1>
            <Countries countries={currentCountry} />

            <Pagination pageSize={pageSize}
                        totalItemsCount={totalItemsCount}
                        setCurrentPage={setCurrentPageHandler}
                        currentPage={currentPage}
                        portionSizeButton={portionSizeButton}
            />
        </div>
    );
};
