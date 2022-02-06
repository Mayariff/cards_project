import React from 'react';
import s from "./Error.module.css";

type propsType ={
    error: string
}

const ErrorMessage = ({error}: propsType) => {
    return (
            <div className={s.error}> {error} </div>
    );
};

export default ErrorMessage;