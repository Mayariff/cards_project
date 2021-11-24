import React, {useState} from 'react';
import SuperButton from "../../1_main/m1-UI/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../1_main/m1-UI/common/c3-SuperCheckbox/SuperCheckbox";
import SuperEditableSpan from "../../1_main/m1-UI/common/c4-SuperEditableSpan/SuperEditableSpan";
import SuperInputText from "../../1_main/m1-UI/common/c1-SuperInputText/SuperInputText";
import SuperSelect from "../../1_main/m1-UI/common/c5-SuperSelect/SuperSelect";
import SuperRange from "../../1_main/m1-UI/common/c7-SuperRange/SuperRange";
import s from '../f0-test/test.module.css'
import SuperRadio from "../../1_main/m1-UI/common/c6-SuperRadio/SuperRadio";

const arr = ['x', 'y', 'z']

const Test = () => {
    //for SuperInput
    const [text, setText] = useState<string>('')
    const error = text ? '' : 'error'
    const showAlert = () => {
        if (error) {
            alert('введите текст...')
        } else {
            alert(text)
        }
    }

    //for SuperCheckbox
    const [checked, setChecked] = useState<boolean>(false)

    // for SuperRange
    const [RangeValue, setRangeValue] = useState(0)
    const onChangeRange = (RangeValue: number) => {
        setRangeValue(RangeValue)
    }


    //for SuperEditableSpan
    const [value, setValue] = useState<string>('')

    //for SuperRadio
    const [option, onChangeOption] = useState(arr[1])

    return (<>
            <h2 style={{textAlign: 'center'}}> TEST </h2>
            <div className={s.main}>
                <div className={s.column}>
                    <h3 className={s.header}>Инпут</h3>
                    <SuperInputText
                        value={text}
                        onChangeText={setText}
                        onEnter={showAlert}
                        error={error}/>
                    <SuperInputText />
                </div>
                <div className={s.column}>
                    <h3 className={s.header}>Кнопки </h3>
                        <SuperButton onClick={()=>alert('click <default>')}> default </SuperButton>
                        <SuperButton red onClick={()=>alert('click <delete>')}> delete </SuperButton>
                        <SuperButton disabled> disabled </SuperButton>
                </div>
                <div className={s.column}>
                    <h3 className={s.header}>Чек-Бокс </h3>
                    <SuperCheckbox
                        checked={checked}
                        onChangeChecked={setChecked}>
                        some text
                    </SuperCheckbox>
                </div>
                <div className={s.column}>
                    <h3 className={s.header}> Редактируемое поле </h3>
                    <div>
                        <SuperEditableSpan
                            value={value}
                            onChangeText={setValue}
                            spanProps={{children: value ? undefined : 'enter text...'}}/></div>
                </div>
                <div className={s.column}>
                    <h3 className={s.header}> Селектор и радио-кнопка </h3>
                    <div>
                        <SuperRadio
                            name={'radio'}
                            options={arr}
                            value={value}
                            onChangeOption={onChangeOption}/>
                    </div>
                <br/>
                    <SuperSelect
                        options={arr}
                        value={option}
                        onChangeOption={onChangeOption}
                    />

                </div>
                <div className={s.column}>
                    <h3 className={s.header}> Диапазон </h3>
                    <div>
                        <span>{RangeValue}</span>
                        <SuperRange
                            onChangeRange={onChangeRange}/>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Test;