import React from 'react';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
import Navbar from './components/SiteWideComponents/Navbar';
import Footer from './components/SiteWideComponents/Footer';
import CheckCalculator from './components/Pages/CheckCalculator';
import ScrollToTop from './components/SiteWideComponents/scrollToTop';
import Home from './components/Pages/Home';
import SignUp from './components/Pages/SignUp';
import Schedule from './components/Pages/Schedule';
import ToDoList from './components/Pages/ToDoList';
import Bookmark from './components/Pages/Bookmark';
import Notes from './components/Pages/Notes';
import GradeCalculator from './components/Pages/GradeCalculator';
import MeasurementsConverter from './components/Pages/MeasurementsConverter';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/Schedule" element={<Schedule />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Notes" element={<Notes />} />
          <Route path="/CheckCalculator" element={<CheckCalculator />} />
          <Route path="/GradeCalculator" element={<GradeCalculator />} />
          <Route path="/MeasurementsConverter" element={<MeasurementsConverter />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
