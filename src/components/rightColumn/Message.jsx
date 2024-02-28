import React, { useContext, useEffect, useRef } from 'react'
import authContext from '../../context/authContext'
import chatContext from '../../context/chatContext'

const Message = ({message}) => {


  const {currentUser} = useContext(authContext)
  const {data} = useContext(chatContext)

  //scrolling to latest message
  const ref = useRef()

  useEffect(()=>{
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [message])

  return (
      
      <div ref={ref} className={`message ${message.senderId === currentUser.uid && 'owner'}`}>
        <div className='messageInfo'>
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL : data.user.photoURL}/>
          <span>Just Now</span>

        </div> 
        <span className='messageContent'>
          <p>{message.text}</p>
          {message.img && <img src={message.img} alt=''/>}
        </span>
      </div>
 
  )
}

export default Message