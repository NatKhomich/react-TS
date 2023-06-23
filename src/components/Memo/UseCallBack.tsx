import React, {useCallback, useMemo, useState} from 'react';

export const UseCallBack = () => {
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['HTML', 'JS', 'React'])

    const newArray = useMemo( ()=> {
        return books.filter( el => el.toLowerCase().indexOf('t') > -1 )
    },[books] )

   /* const addBook = () => {
        console.log('addBook')
        const newBooks = [...books, 'Css']
        setBooks(newBooks);
    };
*/
    const memoizedAddBook = useMemo( ()=> {
       return ()=> {
           const newBooks = [...books, 'Css']
           setBooks(newBooks);
       }
    }, [books] )

    const memoizedAddBook2 = useCallback( ()=> {
        const newBooks = [...books, 'Css']
        setBooks(newBooks);
    }, [books] )

    return (
        <div>
            <button onClick={()=> setCounter(counter+1)}> + </button>
            {counter}
            <Books books={newArray} addBook={memoizedAddBook} />
        </div>
    );
};

type BooksSecretType = {
    books: Array<string>
    addBook: ()=> void
}

const BooksSecret = (props: BooksSecretType) => {
    return (
        <div>
            <button onClick={()=> props.addBook()}> AddBook </button>

            {props.books.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    )
}
const Books = React.memo(BooksSecret )