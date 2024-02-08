import React, { useContext } from 'react'
import { Phone, Video } from 'react-feather'
import Messages from './Messages'
import Input from './Input'
import chatContext from '../../context/chatContext'


const Chat = () => {

  const {data} = useContext(chatContext)

  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{data.user?.displayName}</span>
        <div className='chatIcons'>   
        <Phone className='image'/>
        <Video className='image'/>
        </div>
      </div>
      <Messages/>
      <Input />
      </div>
  )
}

export default Chat