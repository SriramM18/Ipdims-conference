import React from 'react'

const Body = (props) => {
  return (
    <div className='bg-white rounded-lg p-4 drop-shadow-xl'>
        <h3 className='text-3xl font-semibold'>{props.aboutIpdims.title}</h3>
        <p className=' p-4'>{props.aboutIpdims.content}</p>
    </div>
  )
}

export default Body