import React from 'react'
// import Dot from '../Components/Dot'
import { Card } from 'flowbite-react'
import { guidelinesPage } from '../data/data'
import Sidebar from '../Components/Sidebar'
const Guidelines = () => {
  const submissionGuidelines=guidelinesPage.submissionGuidelines;
  const policyOnPlagiarism=guidelinesPage.policyOnPlagiarism;
  return (
    
    <div className='lg:mx-48 bg-bgblue text-justify lg:ml-64'>
    {/* <div className=" fixed lg:w-44 lg:ml-2 lg:pl-4 rounded-xl   top-38 bg-white drop-shadow-lg z-0">
      <Sidebar/>
    </div> */}
    <div className=" text-lg ">
  <Card className=' sm:mx-2 drop-shadow-xl  rounded-xl my-16 bg-footerblue lg:p-10'>
  <span className=''>
    <h5 className="text-center drop-shadow-xl mb-4 text-3xl font-semibold text-footerblue dark:text-black self-center">
      Submission Guidelines
    </h5>
    
    <ul  className="my-7 space-y-5 p-4">

      {submissionGuidelines.map((currentGuideline)=>(
        <li className="flex space-x-3">
        <svg
          className="h-5 w-3 shrink-0 text-black-600 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        > 
          <path
           
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            className='text-black'
          />
        </svg>
        <span className=" text-xl   leading-tight text-black ">
        {currentGuideline}
        </span>
      </li>)
      )}
    </ul>
   
    </span>
  </Card>
  <Card className='d-flex  sm:mx-2 drop-shadow-xl  rounded-xl my-16 bg-footerblue lg:p-10'>
  <span className=''>
    {/* <h5 className="drop-shadow-xl mb-4 text-3xl font-semibold text-footerblue dark:text-gray-400 self-center">
    Policy on Plagiarism
    </h5> */}
    <h5 className="text-center drop-shadow-xl mb-4 text-3xl font-semibold text-footerblue dark:text-black self-center">
    Policy On Plagiarism
    </h5>
    
    <ul className="my-7 space-y-5 p-4">

        {policyOnPlagiarism.map((currentPolicy)=>
          <li className="flex space-x-3">
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
        <span className=" text-xl  font- leading-tight ">
          {currentPolicy}
        </span>
      </li>
        
        )}
      


      
    </ul>
    <a href='https://ipdims.in/submission/'>
    <div className='d-flex justify-center align-middle'>
    <button
      type="button"
      to='https://ipdims.in/submission/'
      href='https://ipdims.in/submission/'
      className="mt-4   justify-center rounded-lg outline-footerblue  ring-2 ring-footerblue  px-5 py-2.5 text-center text-sm  text-black hover:bg-footerblue hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 font-semibold"
    >
    Submit Paper     
    </button>
    </div>
    </a>
    </span>
  </Card>
</div>   
</div>
  )
}

export default Guidelines