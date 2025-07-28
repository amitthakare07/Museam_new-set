// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import Gallery from './Gallery';
import Music from './Music'
import GirlsPage from './GirlsPage';
import BoysPage from './Boyspage';
import LionsPage from './LionsPage';
import MansPage from './MansPage';
import Top from './Top';
import Cont from './Cont';
import './BluePrint.css';
// save
import SubmitRequest from './SubmitRequest';
import Clickable from './Clickable';
import LouvreBooking from './LouvreBooking'
import Login from './Login';
import './footer.css';
import Membership from './Membership';
import Info from './Info';
import OnlineTicketingService from './OnlineTicketingService';
import Group from './Group';


function App() {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a" element={<Gallery />} />
        <Route path="/Music" element={<Music/>} />
        <Route path="/GirlsPage" element={<GirlsPage/>} /> 
        <Route path="/BoysPage" element={<BoysPage/>} /> 
        <Route path="/LionsPage" element={<LionsPage/>} /> 
        <Route path="/MansPage" element={<MansPage/>} /> 
        <Route path="/aa" element={<Top />} />
        <Route path="/cont" element={<Cont />} />
        <Route path="/submitrequest" element={<SubmitRequest />} />
        <Route path="/Clickable" element={<Clickable />} />
        <Route path="/aaa" element={<LouvreBooking/>} />
        <Route path="/aaaa" element={<Login/>} />
        <Route path="/aaaaa" element={<Membership/>} />
        <Route path="/Info" element={<Info/>} />
        <Route path="/OnlineTicketingService" element={< OnlineTicketingService/>} />
        <Route path="/Group" element={< Group/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
