import React from 'react'
// import { NavbarBrand } from 'flowbite-react/lib/esm/components/Navbar/NavbarBrand'
// import { Flowbite } from 'flowbite-react'
// import { Flowbite } from 'flowbite-react'
import {Navbar,Dropdown,Avatar} from "flowbite-react"
import { NavLink, Link } from 'react-router-dom'
import ipdimsLogo from '../resources/ipdims_logo.png'
import nitrLogo from '../resources/nitrLogo.png'

const CollapsibleNav = () => {
  return (
    <div className="  sticky top-0 z-50 shadow drop-shadow-sm ">

    <Navbar
    rounded={true}
    className=''
    >
  
    
    <div className="lg:flex    lg:justify-around  lg:align-middle ">
      <img
        src={ipdimsLogo}
        className=" mx-6 h-16 lg:h-24 lg:block hidden"
        alt="Flowbite Logo"
      />
      {/* <span className="self-center whitespace-nowrap text-xl font-semibold  text-footerblue hover:no-underline"> */}
      <NavLink to='/'  className='lg:py-4 lg:hidden    lg:text-5xl  hover:no-underline text-footerblue hover:text-footerblue font-bold '>
        IPDIMS
       </NavLink>
       <NavLink to='/'  className='ml-2 lg:py-4  lg:block hidden   lg:text-4xl  hover:no-underline text-footerblue hover:text-footerblue font-semibold '>
         5<span className='text-xl font-semibold'><sup>th</sup></span> Innovative Product Design and Intelligent Manufacturing Systems <span className='block text-center mt-2 text-xl break-words'>(IPDIMS 2023)<br></br>(6th & 7th DEC 2023)</span>
       </NavLink>
       <img
        src={nitrLogo}
        className="ml-4 h-16 lg:h-24 lg:block hidden"
        alt="Flowbite Logo"
        />
    </div>

    <div className="flex md:order-2  md:mr-2 lg:ml-16 ">
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      
      <NavLink to='/' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}   className='lg:hidden lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
      Home
        </NavLink>
      
         
      <a
        href="https://ipdims.in/submission/"
        // active={true}
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
      >
        Submission
      </a>
        
        <NavLink to='/guidelines' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}   className='lg:hidden lg:text-lg  hover:no-underline  text-footerblue hover:text-footerblue'>
         Author Guidelines
        </NavLink>

        <NavLink to='/committee' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})}  className='lg:hidden lg:text-lg hover:no-underline  text-footerblue hover:text-footerblue  '>
        Committee

      </NavLink>


        <NavLink to='/registration' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} activeClassName='selected'
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Registration
        </NavLink>
        <NavLink to='/venue' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} activeClassName='selected'
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Venue & Accommodation
        </NavLink>
      <NavLink to='/contact' style={({ isActive }) => 
                      (isActive ? {padding:"0.05em 1em 0.09em ", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", backgroundColor:"#02637c", color:"white", borderRadius:"1em"} : {color: '#024f63'})} activeClassName='selected'
         className={
     ( "lg:hidden rounded-full  lg:text-lg hover:no-underline text-footerblue hover:text-footerblue")
  }
        //  className='lg:text-lg hover:no-underline text-footerblue hover:text-footerblue'
        
        >
          Contact Us
        </NavLink>

    </Navbar.Collapse>
    
  </Navbar>
  </div>
  )
}

export default CollapsibleNav