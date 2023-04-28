
import React from 'react';
import './App.css';
import { Authentication } from './login/login';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

function App() {
  return (
    <div>
        
        <Router>          
          <Routes>
            <Route exact path='/' element={<Authentication />} />
            {/* <Route path='/contact' element={<Contact />} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/sign-up' element={<SignUp />} /> */}
          </Routes>
        </Router>
      </div>
  );
}

export default App;
