import React from 'react'
import SideBar from '../components/leftColumn/SideBar'
import Chat from '../components/rightColumn/Chat'



const Home = () => {
  return (
    
        <div className='home'>
            <div className='container'>
            <SideBar/>
            <Chat />
            </div>
            <div className="copyright">
                <small>&copy; Made by Faizan Naveed</small>
            </div>
        </div>
      
  )
}

export default Home