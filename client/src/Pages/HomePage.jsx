import React, { useState } from 'react'
import SideBar from '../components/SideBar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'

const HomePage = () => {

      
     const[selectedUser,setSelectedUser]=useState(false)

  return (
    <div className='border w-full h-screen sm:px-[15%] sm:py-[5%]'>
        <div className={`h-full grid overflow-hidden backdrop-blur-xl border-2 border-gray-600 rounded-2xl
        overflow-hidden h-[100%] grid grid-cols-1 relative ${selectedUser ? 
        'md:grid-cols-[1fr_1.5fr_1fr] xl:grid-cols-[1fr_2fr_1fr]':
        'md:grid-cols-2'}`}>
           
           
           <div className="border-r border-white/10 overflow-hidden">
            <SideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
           </div>
            <div className="border-r border-white/10 overflow-hidden">
              <ChatContainer selectedUser={selectedUser} setSelectedUser={setSelectedUser} />   
            </div>
             <RightSideBar selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
       </div>
    </div>
  )
}

export default HomePage