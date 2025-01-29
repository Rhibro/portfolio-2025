import {createBrowserRouter} from 'react-router-dom';
import Home from '../components/home/Home';
import About from '../components/about/About';
import Education from '../components/education/Education';
import Portfolio from '../components/portfolio/Portfolio';
import Contact from '../components/contact/Contact';



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
]);

export default router; 