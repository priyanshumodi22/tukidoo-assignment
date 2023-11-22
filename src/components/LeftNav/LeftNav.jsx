import React from 'react'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';

const LeftNav = () => {
  return (
    <div className='bg-gray-100 w-[5%] py-4 flex flex-col items-center justify-between'>
        <div className='flex flex-col items-center h-5/6 w-full'>
            <div className='text-4xl font-semibold text-amber-600 cursor-pointer mb-4'>𝒘</div>
            <div className='cursor-pointer hover:bg-gray-200 w-full flex justify-center py-4'><MenuOutlinedIcon /></div>
            <div className='cursor-pointer hover:bg-gray-200 w-full flex justify-center py-4'><NotificationsNoneOutlinedIcon /></div>
            <div className='cursor-pointer hover:bg-gray-200 w-full flex justify-center py-4'><AccessTimeOutlinedIcon /></div>
            <div className='cursor-pointer hover:bg-gray-200 w-full flex justify-center py-4'><FactCheckOutlinedIcon /></div>
            <div className='cursor-pointer hover:bg-gray-200 w-full flex justify-center py-4'><VisibilityOutlinedIcon /></div>
            <div className='cursor-pointer hover:bg-gray-200 w-full flex justify-center py-4'><GroupOutlinedIcon /></div>
            <div className='cursor-pointer hover:bg-gray-200 w-full flex justify-center py-4'><BarChartOutlinedIcon /></div>
        </div>
        <div>
            <div className='rounded-full p-3 cursor-pointer'>
              <img src="https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png" alt="User Icon" />
            </div>
        </div>
    </div>
  )
}

export default LeftNav