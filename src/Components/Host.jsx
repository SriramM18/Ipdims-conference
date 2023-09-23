import React from 'react'

const host = (props) => {
  return (
    <div className='bg-white rounded-lg p-4 drop-shadow-xl'>
        <h3 className='text-3xl font-semibold'>{props.aboutHost.title}</h3>
        <p className='p-4'>{props.aboutHost.content}</p>
    </div>
  )
}

export default host