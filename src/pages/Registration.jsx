// import { Table } from 'flowbite-react'
import {React,useRef} from 'react'
import TableMain from '../Components/TableMain'
import BankDetails from '../Components/BankDetails'
import FormComponent from '../Components/FormComponent'
import {noteData} from '../data/data'
import SubmissionForm from '../Components/SubmissionForm'
// import { useRef } from react;
// import 
const Registration = (props) => {
  const paymentSection = useRef(null);
  const scrollToBottom = () =>{ 
    window.scrollTo({ 
      top: paymentSection.current.offsetTop,
      // top: document.documentElement.scrollHeight, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    }); 
  }; 
  return (
    <div className="lg:mx-48 lg:ml-64 sm:mx-2 bg-bgblue text-justify ">


       {/* Button for scroll to bottm */}
       <div className='d-flex justify-center align-middle '>
    <button
      type="submit"
      onClick={scrollToBottom}
      className=" my-8 rounded-xl drop-shadow-xl  bg-footerblue text-white ring-2 ring-footerblue  px-5 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
    >Click To Complete Your Registration
    </button>
    </div>


        <div  >
          <TableMain />
        </div>

     

        {/* Note component */}
        <div className="shadow drop-shadow-sm bg-white p-8 mt-16   rounded-lg text-justify">
          <h2 className='text-4xl text-footerblue font-semibold lg:mb-4 self-center text-center'>NOTE<br/></h2>
          <div className="">
          {noteData.map((currNote)=>
            <span className='text-lg p-4'>
            {currNote}
            <br/>
          </span>
          )}
          </div>
        </div>
        <div className="" >
          <BankDetails/>
        </div>
        <div className="" ref={paymentSection}>
          
        </div>
        <div className='   bg-bgblue  rounded-lg' >
          <FormComponent/>
        </div>
        <div className='   bg-bgblue  rounded-lg ' >
          <SubmissionForm/>
        </div>
        
    </div>
  )
}

export default Registration