import React,{useRef,useEffect,useState} from 'react'
import HeroCarousel from '../Components/HeroCarousel'
import ImportantDates from '../Components/Dates'
import Body from '../Components/Body'
import Announcements from '../Components/Announcements'
import PastIpdims from '../Components/PastIpdims'
import Host from '../Components/Host'
import Track from '../Components/Track'
import AnnouncementsAccordion from '../Components/Announcements_accordian'
import { pastIpdimsData,importantDatesData,importantAnnouncements,aboutIpdims, aboutHost, tracksData, } from '../data/data'

// let pastProceedingsTop=document.getElementById("pastProceedings");
// let trigger=pastProceedingsTop.offsetTop;



const Home = () => {


  const [active,setActive]=useState(false);
  const handleMouseHover=()=>{
    setActive(true);
  }
  const handleMouseOut=()=>{
    setActive(false);
  }
  const announcementsRef = useRef(null);
  const datesRef = useRef(null);
  const pastIpdimsRef = useRef(null);
  const tracksRef=useRef(null);

  useEffect(() => {
    const announcementsHeight = announcementsRef.current.offsetHeight;
    const datesHeight=datesRef.current.offsetHeight;
    const pastIpdimsHeight=pastIpdimsRef.current.offsetHeight;
    const track2Height=tracksRef.current.offsetHeight;
    console.log(`The height of the each  elements are ${announcementsHeight}px ${datesHeight}px & ${pastIpdimsHeight}px & ${track2Height}px `);
  }, []); 

  

  // console.log(pastIpdimsData.length);
  const pastIpdimsLength=pastIpdimsData.length;
  const announcementsLength=importantAnnouncements.length;
  const datesLength=importantDatesData.length;
  let maxOfAll=Math.max(pastIpdimsLength,Math.max(announcementsLength,datesLength));


  //   const track1Length=tracksData.track1.content.length;
//   const track2Length=tracksData.track2.content.length;
//   const track3Length=tracksData.track3.content.length;
//   let maxOfAllTracks=Math.max(track1Length,Math.max(track2Length,track3Length));
//   let track1Data=[...tracksData.track1.content]
//   let track2Data=[...tracksData.track2.content]
//   let track3Data=[...tracksData.track3.content]
//   console.log(`track1length is ${track1Length} & maxtracklength is ${maxOfAllTracks}`)
//   let track1diff=maxOfAllTracks-track1Length;
//   let track2diff=maxOfAllTracks-track2Length;
//   let track3diff=maxOfAllTracks-track3Length;

//   while(track1diff>0){
//     track1Data.push("",);
//     track1diff--;
// }
// console.log(`track1data is ${track1Data}`)
// while(track2diff>0){
//   track2Data.push("",);
//   track2diff--;
// } 
// while(track3diff>0){
//   track3Data.push("",);
//   track3diff--;
// }
// tracksData.track1.content=track1Data;
// tracksData.track2.content=track2Data;
// tracksData.track3.content=track3Data;

// console.log(track1Data)
  // console.log(importantAnnouncements);
  

  
  




  return (
    <div className=" bg-bgblue">
      <div className=" my-2 ">
      <div className="z-0 lg:ml-64 HeroCarousel "  id="HeroCarousel">
      <HeroCarousel/>
      </div>
        <div className=" bodyContainer lg:mx-48 lg:ml-64 ">
      
          <div className="cardsContainer  lg:my-2 lg:flex lg:items-stretch ">
            <div ref={announcementsRef} onMouseOver={handleMouseHover} onMouseOut={handleMouseOut} 
            className={ `${active ? "lg:font-bold" : "" } hover:w-full lg:w-1/3  my-2` } id="announcements">
              <Announcements title="Important Announcements" announcements={importantAnnouncements} maxlength={maxOfAll}/>
              {/* <AnnouncementsAccordion title="Important Announcements" announcements={importantAnnouncements} maxlength={maxOfAll}/> */}
                
              </div>
              <div ref={datesRef} className= {` ${active ? "lg:blur" : "" } lg:mx-4  lg:w-1/3  my-2`} id="dates">
                <ImportantDates title=" Important Dates" importantDatesData={importantDatesData} maxlength={maxOfAll}/>
              
              </div>
              
              <div ref={pastIpdimsRef} className={` ${active ? "lg:blur" : "" } lg:w-1/3 lg:my-0 my-2`} id='pastIpdims'>
                <PastIpdims title="Past IPDIMS Proceedings" pastIpdimsData={pastIpdimsData} maxlength={maxOfAll}/>
              </div>
            
            </div>
            <div className=" text-justify">
              <Body aboutIpdims={aboutIpdims}/>
            </div>
            <div id='tracks' className="my-3 text-justify">
              <Host aboutHost={aboutHost}/>
            </div>
            <div  className=' lg:flex  my-2' >
              <div  className='lg:w-1/3 mt-4'>
                <Track  trackData={tracksData.track1}/>
              </div>
              <div ref={tracksRef} className='lg:w-1/3 mt-4 lg:my-0 lg:mx-4 '>
                <Track  trackData={tracksData.track2}/>
              </div>
              <div className='lg:w-1/3 mt-4 lg:my-0'>
                <Track  trackData={tracksData.track3}/>
              </div>
            </div>


      </div>
      </div>
      
    
    </div>
  )
}


export default Home