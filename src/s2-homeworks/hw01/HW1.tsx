import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'

/*
* 1 - описать тип MessageType СДЕЛАНО
* 2 - описать тип MessagePropsType в файле Message.tsx СДЕЛАНО
* 3 - в файле Message.tsx отобразить приходящие данные СДЕЛАНО
* 4 - выполнить пункт 3 в файле FriendMessage.tsx СДЕЛАНО
* 5 - сделать стили в соответствии с дизайном СДЕЛАНО
* */

// нужно создать правильный тип вместо any
type userType = {
    avatar: string
    name: string
}
type messageType = {
    text: string
    time: string
}
export  type MessageType = {
    id: number
    user: userType
    message: messageType }

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Alex',  // можно менять
    },
    message: {
        text: 'Hey! How was your day?', // можно менять
        time: '15:30', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar, // можно менять
        name: 'Jamie', // можно менять
    },
    message: {
        text: 'Pretty good! Just finished work. You?', // можно менять
        time: '15:41', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
