import React from 'react';
import s from "./Container.module.css";
import Spinner from "../c10-Spinner/Spinner";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../m2_BLL/store";
import {RequestStatusType} from "../../../m2_BLL/0n_App-reduser";

type propsType ={
    children: React.ReactNode
    title:string
}
const Container = ({children, title} :propsType) => {

    const status = useSelector<AppRootStateType, RequestStatusType>(store=> store.app.status)

    return (
            <div className={s.column}>
                {status=== 'loading' && <Spinner/>}
                <h2 className={s.header}> {title} </h2>
                <div className={s.content}>{children}</div>
            </div>
    );
};

export default Container;