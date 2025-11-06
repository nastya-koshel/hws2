import React, {useState} from 'react'
import Affairs from './affairs/Affairs'
import s2 from '../../s1-main/App.module.css'
import {rename} from "node:fs";

/*
* 1 - описать типы AffairPriorityType, AffairType СДЕЛАНО
* 2 - указать нужный тип для defaultAffairs СДЕЛАНО
* 3 - дописать типы и логику функции filterAffairs и проверить её тестами СДЕЛАНО
* 4 - выполнить пункт 3 для функции deleteAffair СДЕЛАНО
* 5 - указать нужный тип в useState с affairs СДЕЛАНО
* 6 - дописать тип и логику функции deleteAffairCallback СДЕЛАНО
* 7 - в файле Affairs.tsx дописать типизацию пропсов СДЕЛАНО
* 8 - в файле Affairs.tsx дописать логику функций setAll, setHigh, setMiddle, setLow СДЕЛАНО
* 9 - в файле Affair.tsx дописать типизацию пропсов СДЕЛАНО
* 10 - в файле Affair.tsx дописать функции deleteCallback и использовать СДЕЛАНО
* 11 - в файле Affair.tsx отобразить приходящие данные СДЕЛАНО
* */

// types
export type AffairPriorityType = 'high' | 'low' | 'middle'
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType [] = [
    {_id: 1, name: 'React', priority: 'high'}, // студенты могут изменить содержимое name и количество элементов в массиве, ...priority не менять!
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType [] => {
    return filter === 'all'
    ? affairs
    : affairs.filter(af => af.priority === filter)
}
export const deleteAffair = (affairs: AffairType[], _id: AffairType['_id']): AffairType[] => {
    return affairs.filter( af => af._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: AffairType['_id']) => { // need to fix any
        setAffairs(deleteAffair(affairs, _id))
    }

    return (
        <div id={'hw2'}>
            <div className={s2.hwTitle}>Homework #2</div>
            <div className={s2.hw}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                    filter={filter}
                />
            </div>
        </div>
    )
}

export default HW2
