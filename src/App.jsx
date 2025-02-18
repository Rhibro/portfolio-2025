import './App.css'
// import React from 'react';
import {RouterProvider} from "react-router-dom";
import router from './router/router';
import React from 'react';

// import Home from './components/home/Home';
// import Education from './components/education/Education';
// import About from './components/about/About';
// import Portfolio from './components/portfolio/Portfolio';
// import Contact from './components/contact/Contact';



function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App;
