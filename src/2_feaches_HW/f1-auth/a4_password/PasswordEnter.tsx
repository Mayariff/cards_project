import React from 'react';
import {useParams} from "react-router-dom";

const PasswordEnter = () => {
    const {token}= useParams()
    return (
        <div>
            <h2>ENTERING PASSWORD PAGE</h2>
            {token}
        </div>
    );
};

export default PasswordEnter;