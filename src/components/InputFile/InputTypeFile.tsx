import React from 'react';
import {CustomInputFile} from "components/InputFile/CustomInputFile/CustomInputFile";
import {InputTypeFileBase64} from "components/InputFile/InputTypeFileBase64/InputTypeFileBase64";

export const InputTypeFile = () => {
    return (
        <div style={{marginTop: '30px'}}>
            <input type="file" accept='image/*' multiple />

            <CustomInputFile />
            <InputTypeFileBase64 />
        </div>
    );
};
