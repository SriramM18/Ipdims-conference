import React from 'react'
import { Card } from 'flowbite-react'
import brochure from "../resources/brochure.pdf"


const Announcements = (props) => {
  let announcements=[...props.announcements];
  let maxOfAll=props.maxlength+2;
  
  

  while(props.announcements.length<maxOfAll){
      announcements.push({});
      maxOfAll--;
  }
  console.log(props.announcements);
  return (
    <div className="">
        <div className="">
        <Card style={{height:"430px"}} className='relative  hover:shadow-2xl drop-shadow-xl '>
<div className=""></div>
    <div className="absolute top-6  flex items-center justify-center">
      <h5 className=" text-xl font-semibold leading-none text-footerblue dark:text-white ">
        Important Announcements
      </h5>
      
    </div>
    <div className="flow-root">
      <ul className="">
        
        {announcements.map((announcement,index)=>
        
        <li key={index} className="py-3  sm:py-4">

        
          <div className="flex items-center space-x-4">
            <div className="min-w-0 flex-1 top-5">
              <p className="truncate text-lg  font-medium  text-gray-900 dark:text-white ">
              {announcement.content}
              
              </p>
              
            </div>
            
          </div>
          
      
        </li>
        
        
        )}
        <li>
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <a href="https://ipdims.in/submission/" target='_blank' class=" inline-flex items-center text-footerblue hover:underline">
                  Click here to submit
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </a>
            </div>
       
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
              <a href={brochure} target='_blank' class=" inline-flex items-center text-footerblue hover:underline">
                  Download Brochure
                <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
              </a>
            </div>

       </li>
      </ul>
    </div>
  </Card>
</div>
    </div>
  )
}

export default Announcements