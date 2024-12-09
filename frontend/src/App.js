import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css';
import AnimatedCursor from "react-animated-cursor"

import Layout from './pages/Layout'
import Main from './pages/Main'
import Post from './pages/Post';
import About from './pages/About';
import Contact from './pages/Contact';
import Git from './pages/Git';

/** 관리자 */
import PostWrite from './pages/admin/PostWrite';

const App = () => {
  return (
   <>
     <AnimatedCursor />
     <Router>
          <Routes>
              <Route path="/" element={<Layout />}>
                 <Route index element={<Main />} />
                 <Route path="post" element={<Post />} />
                 <Route path="about" element={<About />} />
                 <Route path="git" element={<Git />}/>
                 <Route path="contact" element={<Contact />} />

                 <Route path="adminwrite" element={<PostWrite />} />
              </Route>
          </Routes>

     </Router>
   </>  
  )
}

export default App