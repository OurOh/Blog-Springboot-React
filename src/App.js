import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import AnimatedCursor from "react-animated-cursor"

import Layout from './pages/Layout'
import Main from './pages/Main'
import Post from './pages/Post';

const App = () => {
  return (
   <>
     <AnimatedCursor />
     <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                 <Route index element={<Main />} />
                 <Route path="post" element={<Post />} />
              </Route>
          </Routes>

     </Router>
   </>  
  )
}

export default App