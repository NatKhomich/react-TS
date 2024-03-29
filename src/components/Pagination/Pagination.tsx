import React, {FC, useState} from 'react';
import styles from './Pagination.module.css'


type PaginationType = {
    setCurrentPage: (page: number) => void
    totalItemsCount: number
    pageSize: number
    portionSizeButton: number
    currentPage: number
}

export const Pagination: FC<PaginationType> = (props) => {

    const {setCurrentPage, totalItemsCount, pageSize, portionSizeButton, currentPage} = props

    const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / (portionSizeButton || 10)))

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSizeButton)

    //определяем левую и правую границу порции
    const leftBorderPortionPage = (portionNumber - 1) * portionSizeButton + 1
    const rightBorderPortionPage = portionNumber * portionSizeButton

    const onClickPrevHandler = () => {
        setPortionNumber(portionNumber - 1)
    }
    const onClickNextHandler = () => {
        setPortionNumber(portionNumber + 1)
    }

    const setCurrentPageHandler = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }


    return (
        <div className={styles.pagination}>

            {portionNumber > 1 &&
                <button className={styles.button} onClick={onClickPrevHandler}>PREV</button>
            }

            {pages
                .filter(page => page >= leftBorderPortionPage && page <= rightBorderPortionPage)
                .map(page => {
                    return (
                        <span key={page}
                              className={currentPage === page ? styles.selectedPage : styles.pageNumber}
                              onClick={() => setCurrentPageHandler(page)}
                        >
                                {page}
                            </span>
                    )
                })}

            {portionCount > portionNumber &&
                <button className={styles.button} onClick={onClickNextHandler}>NEXT</button>
            }

        </div>
    )
};
