import React from 'react';
import spinner from '../../../../assets/image/58e4a4e4fa041a11f796a2014b1bcfa4.gif'
import s from './Spinner.module.css'

const Spinner = () => {
    return (
            <img src={spinner} alt={' Please wait. Loading...'} className={s.img} />
    );
};

export default Spinner;