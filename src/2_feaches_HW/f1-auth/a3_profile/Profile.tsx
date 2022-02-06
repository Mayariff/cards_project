import React from 'react';
import {withAuthRedirect} from "../../../1_main/m2_BLL/hoc/withAuthRedirect";
import {compose} from "redux";


const Profile = () => {
    return (
        <div>
            <h2>PROFILE PAGE</h2>

        </div>
    );
};

export default compose(withAuthRedirect)(Profile);