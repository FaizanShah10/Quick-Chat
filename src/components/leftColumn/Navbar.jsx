import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import authContext from '../../context/authContext'

const Navbar = () => {
  const {currentUser} = useContext(authContext)

  return (
    <div className='navbar'>
      <span className="logo">Quick Chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.name}</span>
        <button onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar