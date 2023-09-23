import React from 'react'
import { Card } from 'flowbite-react'
 const PastIpdims = (props) => {
  let pastIpdimsData=[...props.pastIpdimsData];
  let maxOfAll=props.maxlength+1;
// console.log(props.maxlength)
// console.log(maxOfAll);
while(props.pastIpdimsData.length<maxOfAll){
      pastIpdimsData.push({});
      maxOfAll--;
  }
  // console.log(pastIpdimsArr)
  function ConditionalRender({link,isPresent}){
      if(isPresent){
          return(
             <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white ">
            <a href={link} target='_blank' class="inline-flex items-center text-footerblue hover:underline  ">
                More Details
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
            </div> 
          )
      }
      else{

      }
  }
  return (
    <div className=''>
        <div className=" rounded-xl ">
        <Card style={{height:"430px"}} className='relative hover:scale-105 hover:shadow-2xl drop-shadow-xl ' rounded="true">
    <div className=''>
    <div className="absolute top-6 self-center mb-2 flex items-center justify-center ">
      <h5 className="text-xl font-semibold leading-none text-footerblue dark:text-white">
        {props.title}
      </h5>
    </div>
    <div className="flow-root">
      <ul className="">

    {pastIpdimsData.map((currIpdims,index)=>
        <li key={index} className="py-2 sm:py-4">
          <div className="flex items-center space-x-4">
            <div className="min-w-0 flex-1">
              <p className="truncate text-lg     font-medium  text-gray-900 dark:text-white">
              {currIpdims.title}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {currIpdims.subtitle}
              </p>
              
              
            </div>
            <ConditionalRender link={currIpdims.href} isPresent={currIpdims.title}/>
            {/* <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            <a href={currIpdims.href} class="inline-flex items-center text-footerblue hover:underline">
                More Details
              <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path><path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path></svg>
            </a>
            </div> */}
          </div>
        </li>
      )}       
      </ul>
    </div>
    </div>
  </Card>
</div>
    </div>  
  )
}

export default PastIpdims