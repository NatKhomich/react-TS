import React, {ChangeEvent, useRef} from 'react';

export const CustomInputFile = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const selectFileHandler = () => {
        inputRef && inputRef.current?.click();
    };

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            console.log('file: ', file)
        }
    };

    return (
        <div>
            <button
                style={{backgroundColor: 'gold', width: '100px', height: '30px', margin: '20px 0', fontSize: '15px'}}
                onClick={selectFileHandler}>
                Upload file
            </button>
            <input style={{display: 'none'}}
                   ref={inputRef}
                   type="file"
                   onChange={uploadHandler}
            />
        </div>
    )
}
