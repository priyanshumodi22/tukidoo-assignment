import React from 'react'
import LeftNav from './components/LeftNav/LeftNav'
import Header from './components/Header/Header'
import Sections from './components/Sections/Sections'
import UserCard from './components/User/Usercard'
import Actions from './components/CallButtons/Buttons'

const App = () => {
  return (
    <div className='flex'>
      <LeftNav />
      <div className='flex-1 flex flex-col p-4 gap-6'>
        <Header />
        <Sections />
        <div className='flex gap-4'>
          <div className='w-[15%] flex flex-col gap-8'>
            <div className='flex flex-col gap-4'>
              <UserCard image="https://us.123rf.com/450wm/tomwang/tomwang1807/tomwang180700196/105211005-beautiful-young-business-woman-operator-in-headset.jpg" name="Ridha" />
              <UserCard image="https://content.jdmagicbox.com/comp/pune/b8/020pxx20.xx20.180316110806.x1b8/catalogue/dadhichi-technologies-aundh-pune-call-centres-dvtddxwg6u-250.jpg" name="Ms. Kaur" />
            </div>
            <Actions />
          </div>
          <div className='flex-1'>
            <iframe width="100%" height="433" src="https://www.youtube.com/embed/S0DSM-EkQE8" title="An introduction to mathematical theorems - Scott Kennedy" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App