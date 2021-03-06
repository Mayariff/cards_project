import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    nameButton: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className,nameButton,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
 const finalClassName =  restProps.disabled ? `${s.default} ${s.disabled}` : (red ? `${s.default} ${s.red}` : s.default)


    return (
        <button
            className={finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        >{nameButton}</button>
    )
}

export default SuperButton
