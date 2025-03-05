import {createBrowserRouter} from 'react-router-dom';
import React from 'react';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Education from '../components/education/Education';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';
import NotFound from '../components/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/education',
        element: <Education />,
    },
    {
        path: '/portfolio',
        element: <Portfolio />,
    },
    {
        path: '/contact',
        element: <Contact />,
    },
    {
        path: '/notfound',
        element: <NotFound />,
    },
]);

export default router; 