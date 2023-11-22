import React from 'react'

const UserCard = ({name, image}) => {
  return (
    <div className='w-full h-32 relative rounded-2xl overflow-hidden cursor-pointer'>
      <img src={image} className='w-full h-full object-cover' />
      <p className='absolute -bottom-1 -left-2 bg-white font-semibold rounded-2xl px-4 py-2'>{name}</p>
    </div>
  )
}

export default UserCard