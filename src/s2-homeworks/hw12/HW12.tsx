import React, {useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, themeIdType} from './bll/themeReducer'
import {AppStoreType} from "../hw10/bll/store";

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер СДЕЛАНО
* 2 - получить themeId из редакса СДЕЛАНО
* 3 - дописать тип и логику функции change СДЕЛАНО
* 4 - передать пропсы в SuperSelect СДЕЛАНО
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]

const HW12 = () => {
    // взять ид темы из редакс
    const themeId = useSelector<AppStoreType, number>(state => state.theme.themeId)
    const dispatch = useDispatch()

    const change = (id: number) => {// дописать функцию
        dispatch(changeThemeId(id))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>
            <div className={s2.hw}>
                <div className={s.inputTitle}>Выберите тему</div>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChangeOption={(o) => change(o)}
                />
            </div>
        </div>
    )
}

export default HW12
