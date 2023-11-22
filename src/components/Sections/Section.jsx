import React from 'react'

const Section = ({Icon, title, active}) => {
  const iconColor = active ? '#000' : '#9ca3af';
  return (
    <div className={`flex items-center p-3 rounded-3xl gap-2 cursor-pointer ${active && 'bg-white'}`}>
        <div><Icon style={{color: iconColor}} /></div>
        <p className={`text-gray-400 font-medium xl:text-sm ${active && 'text-black'}`}>{title}</p>
    </div>
  )
}

export default Section