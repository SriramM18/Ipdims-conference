import React from 'react'
import { Card } from 'flowbite-react'
const ImportantDates = (props) => {
  return (
    <div className=''>
        <div className="">
  <Card style={{height:"430px"}} className='relative hover:scale-105 hover:shadow-2xl hover:bg-gray-200 drop-shadow-xl '>
    <div className="absolute top-6 self-center mb-4 flex items-center justify-center">
      <h5 className="text-xl font-semibold leading-none text-footerblue dark:text-white">
        {props.title}
      </h5>
    </div>
    <div className="flow-root ">
      <ul className="">

        {props.importantDatesData.map((currDate,index)=>
          <li key={index} className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg     font-medium  text-gray-900 dark:text-white">
              {currDate.title}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
              {currDate.subtitle}
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {currDate.duedate}
            </div>
          </div>
        </li>)}

        



        
        
      </ul>
    </div>
  </Card>
</div>
    </div>
  )
}

export default ImportantDates