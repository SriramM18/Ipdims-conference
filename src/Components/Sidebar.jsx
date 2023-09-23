import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {

  return (
    <div className='bg-white  overflow-clip w-full ' id="sidebar">
        <ul className='w-full flex justify-around flex-column my-2 '>
        <NavLink
        
         to='/' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 3em  0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} 
                        className='hover:drop-shadow-lg hover:bg-gray-200 hover:rounded-lg my-2 lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
          Home 
        </NavLink>

        <a
        href="https://ipdims.in/submission/"
        // active={true}
        className='hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue '
      >
        Submission
      </a>
      
      {/* <NavLink to='/login' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} 
                      : {color: '#024f63'})}   
                      className='hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
         Submission
        </NavLink> */}
      

      <NavLink to='/guidelines' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} 
                      : {color: '#024f63'})}   
                      className='hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
         Author  Guidelines
        </NavLink>
        

        <NavLink to='/committee' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}  
                      className='hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>
        Committee

      </NavLink>
        {/* <a
        href="https://ipdims.in/wp-content/uploads/2022/07/IPDIMS-2022_Brochure.pdf"
        // active={true}
        target="_blank"
        className='hover:rounded-lg  hover:drop-shadow-lg hover:bg-gray-200 my-2 lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue '
      >
        Brochure
      </a> */}
      
        {/* <NavLink
        
         to='/pastProceedings' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} 
                        className='hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
          Past Proceedings
        </NavLink>
         */}

       

     

        <NavLink to='/registration' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} activeClassName='selected'
         className={
     ( "hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Registration
        </NavLink>

        <NavLink to='/venue' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} activeClassName='selected'
         className={
     ( "hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Venue & Accommodation
        </NavLink>

        <NavLink to='/contact' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} activeClassName='selected'
         className={
     ( "hover:rounded-lg hover:drop-shadow-lg hover:bg-gray-200 my-2 rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Contact Us
        </NavLink>


        </ul>
    </div>
  )
}

export default Sidebar