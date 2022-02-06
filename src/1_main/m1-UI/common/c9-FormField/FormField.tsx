import React, {ChangeEvent} from 'react';
import SuperInputText from "../c1-SuperInputText/SuperInputText";
import s from './FormField.module.css'


export type propsType={
    fieldName: string,
    value: string
    onChangeHandler : (e:ChangeEvent<HTMLInputElement>) => void
    type?: string
    placeholder?:string
    required?: boolean
}


const  FormField =({fieldName, value, onChangeHandler,type,required } : propsType)=> {
    return (
        <label className={s.field}>
            <span className={s.FormLabel}>{fieldName}</span><br/>
            <SuperInputText name={fieldName} value={value} onChange = {onChangeHandler} type={type} required={required} />
        </label>
    );
};

export default FormField;