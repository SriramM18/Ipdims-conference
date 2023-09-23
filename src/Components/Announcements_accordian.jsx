import React from 'react'
import { Card,Accordion } from 'flowbite-react'



const AnnouncementsAccordion = (props) => {
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
        <Card style={{height:"430px"}} className='relative hover:scale-105 hover:shadow-2xl drop-shadow-xl '>
<div className=""></div>
    <div className="absolute top-6 mb-4 flex items-center justify-center">
      <h5 className=" text-xl font-semibold leading-none text-footerblue dark:text-white ">
        Important Announcements
      </h5>
      
    </div>

    <Accordion className='w-full' alwaysOpen={true}>
  <Accordion.Panel>
    <Accordion.Title className='text-black'>
      Submission Date
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2  text-black">
      Submission Date Extended Till 30-09-2022
      </p>
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
      Copy rights and Paper formats
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Copyright and paper formats  for \"Springer LNME\" and \"Elsevier Materials Today\"  Released
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>

  <Accordion.Panel>
    <Accordion.Title>
      IPDIMS Brochure
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      IPDIMS Brochure Released kindly Check here
      </p>
      
    </Accordion.Content>
  </Accordion.Panel>
  </Accordion>

    {/* <div className="flow-root">
      <ul className="">
        
        {announcements.map((announcement,index)=>
        <li key={index} className="py-3 sm:py-4">

        
          <div className="flex items-center space-x-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg  font-medium  text-gray-900 dark:text-white">
              {announcement.content}
              </p>
              
            </div>
            
          </div>
          
      
        </li>
        )}
       
        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href="https://ipdims.in/wp-content/uploads/2022/07/IPDIMS-2022_Brochure.pdf" class="inline-flex items-center text-footerblue hover:underline">
                Download Brochure
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
            </div>


      </ul>
    </div> */}
  </Card>
</div>
    </div>
  )
}

export default AnnouncementsAccordion