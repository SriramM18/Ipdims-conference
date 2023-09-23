// import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Guidelines from './pages/Guidelines';
import Registration from './pages/Registration';
// import Submission from './pages/Submission';
import Committee from './pages/Committee'
import { footerData } from './data/data';
import CollapsibleNav from './Components/CollapsibleNav';
import FooterMain from './Components/FooterMain';
import RegistrationSteps from './pages/RegistrationSteps';
import PastProceedings from './pages/PastProceedings';
import Sidebar from './Components/Sidebar';
import Login from './pages/Login';
import Venue from './pages/Venue';
import Submission from './pages/Submission';
// import {CollapsibleNav,FooterMain} from './Components'

function App() {
  // const windowHeight=window.innerHeight;
  // console.log(windowHeight);
  // const windowHeightString=""+windowHeight/20;
  // console.log(windowHeightString)

  return (
    <div className={`bg-bgblue  `}  >
    
            <div className="">
            <BrowserRouter> 
            
            <div className="sticky top-0 z-50 shadow drop-shadow-sm">
              <CollapsibleNav/>
            </div>
            <div 
            // style={()=>(display:`absolute`, top:`${windowHeightString}`)} 
            className= {` top-1/4 z-50  overflow-hidden   hidden ml-2 lg:block fixed lg:w-48 lg:ml-2 lg:pl-2 rounded-xl    bg-white drop-shadow-lg`}>
              <Sidebar/>
            </div>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/guidelines' element={<Guidelines />} />
                <Route path='/registration' element={<Registration />} />
                <Route path='/submission' element={<Submission/>} />
                <Route path='/committee' element={<Committee />} />
                {/* <Route path='/registrationsteps' element={<RegistrationSteps/>}/> */}
                <Route path='/pastProceedings' element={<PastProceedings/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/venue' element={<Venue/>}/>
              </Routes>
            </BrowserRouter>
            </div>


        <div className=" footer">
          <FooterMain footerData={footerData}/>

        </div>

    </div>
  );
}

export default App;
