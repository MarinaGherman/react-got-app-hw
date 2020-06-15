import React from 'react';
import './errorMessage.css';

const ErrorMessage =() => {
    return (
        <>
            <img src={process.env.PUBLIC_URL + '/img/error.png' } alt='error' />
            <span>Something is wrong</span>
        </>

    )
}

export default ErrorMessage;