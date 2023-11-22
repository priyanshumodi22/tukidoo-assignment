import React from 'react'
import Button from './Button';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined';
import SendToMobileOutlinedIcon from '@mui/icons-material/SendToMobileOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const Buttons = () => {
  return (
    <div className='flex flex-wrap gap-8'>
      <Button Icon={CameraAltOutlinedIcon} title="Cam" />
      <Button Icon={MicNoneOutlinedIcon} title="Mic" />
      <Button Icon={SendToMobileOutlinedIcon} title="Share" />
      <Button Icon={ChatOutlinedIcon} title="Chat" />
      <Button Icon={LogoutOutlinedIcon} title="Leave" />
    </div>
  )
}

export default Buttons