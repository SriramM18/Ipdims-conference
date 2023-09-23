import React from 'react'
import nitRourkelaImg from "../resources/nitRourkelaEntrance.jpeg"
import jharsugudaAirport from "../resources/jharsugudaAirport.jpeg"
import ranchiAirport from "../resources/ranchiAirport.jpeg"
import bhubhaneshwarAirport from "../resources/bhubhaneshwarAirport.jpeg"
import train from "../resources/trains.jpeg"
import bus from "../resources/bus.jpeg"
import guestHouse from "../resources/guestHouse.jpeg"


const Venue = () => {
  return (
    <div className='body lg:mx-48 lg:ml-64  text-justify mt-16 '>
        <div className="venue">
        {/* <h1>manohaoiho</h1> */}
        <h5 className="my-8 text-4xl font-bold text-footerblue dark:text-gray-400 ">
              Mechanical Sciences Building, Nit Rourkela
            </h5>
            <div className="nitrMap">
                <div className="card bg-white rounded-3xl flex  " >
                    <div className="photo">
                    <a className='hover:scale-105' href='https://goo.gl/maps/5HhkQW8GWPcfGfEX8' target='_blank'>
                    <img 
                    src={nitRourkelaImg}
                    
                     className='relative hover:scale-105 hover:drop-shadow-xl drop-shadow-lg w-full h-96 rounded-3xl' alt="nitRourkelaImage">
                    </img>
                    <button
                            type="button"
                            className="  absolute bottom-1/4 bg-footerblue   left-1/3 text-xl rounded-lg  font-bold  hover:bg-transparent hover:ring-2 hover:ring-white   hover:rounded-2xl  px-5 py-2.5 text-center   text-white hover:bg-footerblue hover:text-white "
                            >
                            View On Map     
                            </button>
                            
                    {/* <h1 className='text-5xl text-white bottom-1/4 left-1/3 absolute '>View On Map</h1> */}
                    </a>


                        
                            {/* <iframe title="Gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.465633830462!2d84.90428056561692!3d22.250618343266215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201fdcfe2ceb8f%3A0xd769372f05ea4fe2!2sNew%20Mechanical%20Sciences%20Block!5e0!3m2!1sen!2sin!4v1681468270863!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">View On Map</iframe> */}

                    </div>
                </div>
            </div>
            <div className="nearbyAirPorts ">
            <h5 className="my-8 text-4xl font-bold text-footerblue dark:text-gray-400 ">
              Near By AirPorts
            </h5>
                <div className="container lg:flex lg:w-full ">
                    <div className="  jharsuguda drop-shadow-lg lg:w-1/3 bg-white rounded-3xl ">
                        <img src={jharsugudaAirport} alt='jharsuguda airport' 
                        className='w-full lg:h-64 rounded-3xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-footerblue dark:text-white '>Jharsuguda AirPort </h3>
                        <p className='text-md font-semibold mt-4 lg:px-4'> 
                        You Can catch direct flights from Delhi and Hyderabad to here.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.flightconnections.com/flights-to-jharsuguda-jrg' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-xl drop-shadow-xl hover:bg bg-footerblue text-white ring-2 ring-footerblue  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Flights
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    <div className=" mx-3 ranchi drop-shadow-lg lg:w-1/3 bg-white rounded-3xl ">
                        <img src={ranchiAirport} alt='ranchi airport' 
                        className='w-full lg:h-64 rounded-3xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-footerblue dark:text-white '>
                        Ranchi AirPort </h3>
                        <p className='text-md font-semibold mt-4 lg:px-4'> 
                        You can catch direct flights from almost every major city in India.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.flightconnections.com/flights-to-ranchi-ixr' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-xl drop-shadow-xl hover:bg bg-footerblue text-white ring-2 ring-footerblue  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Flights
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    <div className="  bhubhaneshwar drop-shadow-lg lg:w-1/3 bg-white rounded-3xl ">
                        <img src={bhubhaneshwarAirport} alt='bhubhaneshwar airport' 
                        className='w-full lg:h-64 rounded-3xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-footerblue dark:text-white '>
                        Bhubhaneshwar AirPort </h3>
                        <p className='text-md font-semibold mt-4 lg:px-4'> 
                        You Can catch from all over India. Has more number of flights among 3 options.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.flightconnections.com/flights-from-bhubaneswar-bbi' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-xl drop-shadow-xl hover:bg bg-footerblue text-white ring-2 ring-footerblue  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Flights
                                </button>
                            </a>
                           
                            </div>
                    </div>
                </div>
                
            </div>
            <div className="otherAlternatives">
            <h5 className="my-8 text-4xl font-bold text-footerblue dark:text-gray-400 ">
              Other Alternatives
            </h5>
                <div className="container lg:flex lg:w-full ">
                    <div className="  jharsuguda drop-shadow-lg lg:w-1/2 bg-white rounded-3xl ">
                        <img src={train} alt='jharsuguda airport' 
                        className='w-full lg:h-64 rounded-3xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-footerblue dark:text-white '>
                        Indian Railways </h3>
                        <p className='text-md font-semibold mt-4 lg:px-4'> 
                        Rourkela Junction is well connected to all cities of India by Indian Railways.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.irctc.co.in/nget/train-search' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-xl drop-shadow-xl hover:bg bg-footerblue text-white ring-2 ring-footerblue  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Trains
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    <div className=" mx-3 ranchi drop-shadow-lg lg:w-1/2 bg-white rounded-3xl ">
                        <img src={bus} alt='ranchi airport' 
                        className='w-full lg:h-64 rounded-3xl '>

                        </img>
                        <h3 className='mt-4 text-3xl text-center  font-semibold leading-none text-footerblue dark:text-white '>
                        By Road </h3>
                        <p className='text-md font-semibold mt-4 lg:px-4'> 
                        You can get here by road from Bhubhaneshwar,Ranchi& many cities through Bus & Cabs.</p>
                        <div className=' py-2 d-flex justify-center align-middle '>
                            <a href='https://www.abhibus.com/' target='_blank'>
                                <button
                                    type="submit"
                                    href=''
                                    className=" my-2  rounded-xl drop-shadow-xl hover:bg bg-footerblue text-white ring-2 ring-footerblue  px-4 py-2.5 text-center text-sm font-medium   hover:ring-4 hover:text-black focus:outline-none "
                                    >Check Buses
                                </button>
                            </a>
                           
                            </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
        <div className="accommodation">
            <div className="guestHouse">
                <h5 className="my-8 text-4xl font-bold text-footerblue dark:text-gray-400 ">
                Accommodation
                </h5>
                <div className="nitrMap">
                <div className="card bg-white rounded-3xl flex  " >
                    <div className="photo">
                    <a className='hover:scale-105' href='https://guesthouse.nitrkl.ac.in/Users/HomePage.aspx' target='_blank'>
                    <img 
                    src={guestHouse}
                    
                     className='relative hover:scale-105 hover:drop-shadow-xl drop-shadow-lg w-full h-96 rounded-3xl' alt="nitRourkelaImage">
                    </img>
                    <h1 className='absolute text-4xl text-white top-16 left-1/4 font-semibold'>NIT Rourkela Guest House</h1>
                    <button
                            type="button"
                            className="  absolute bottom-1/4 bg-footerblue   left-1/3 text-xl rounded-lg  font-bold  hover:bg-transparent hover:ring-2 hover:ring-white   hover:rounded-2xl  px-5 py-2.5 text-center   text-white hover:bg-footerblue hover:text-white "
                            >
                            Book Now     
                            </button>
                            
                    {/* <h1 className='text-5xl text-white bottom-1/4 left-1/3 absolute '>View On Map</h1> */}
                    </a>


                        
                            {/* <iframe title="Gmap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3485.465633830462!2d84.90428056561692!3d22.250618343266215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201fdcfe2ceb8f%3A0xd769372f05ea4fe2!2sNew%20Mechanical%20Sciences%20Block!5e0!3m2!1sen!2sin!4v1681468270863!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">View On Map</iframe> */}

                    </div>
                </div>
            </div>
            </div>
        </div>    
    
    
    
    </div>
  )
}

export default Venue