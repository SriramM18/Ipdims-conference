import React from 'react'
import { Card } from 'flowbite-react'
import { NavLink } from 'react-router-dom'
const Track = (props) => {
    // console.log(props)
    const data=props.trackData;
  return (
    <div>
        <div className=" text-lg">
  <Card style={{height:"684px"}} className='lg:relative hover:scale-105 hover:shadow-2xl drop-shadow-xl'>
    <h5 className="lg:absolute lg:top-6 mb-4 text-3xl font-semibold text-footerblue dark:text-gray-400 self-center">
      {data.title}
    </h5>
    <div className="lg:absolute lg:top-24 flex items-center text-gray-900 dark:text-white ">
      <p className="text-xl font-semibold self-center items-center">
        {data.subtitle}
      </p>
    </div>
    <ul  className="lg:absolute lg:top-36 my-7 space-y-5">

    
    {data.content.map((currtopic,index)=><li key={index} className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            // clipRule="evenodd"
            className='text:black-600'
          />
        </svg>
        <span className=" font-normal leading-tight text-gray-500 dark:text-gray-400">
        {currtopic}
        </span>
      </li>)}

      



    </ul>
    {/* <a href='/registration'>
    <button
      type="button"
      href='/registration'
      className="inline-flex w-full justify-center rounded-lg outline-black ring-2  ring-footerblue  px-5 py-2.5 text-center text-sm font-medium text-black hover:bg-footerblue hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >
      Select Track
    </button>
    </a> */}
  </Card>
</div>
    </div>
  )
}

export default Track