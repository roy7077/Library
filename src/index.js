import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import './index.css';
import App from './App';
import Bookdetails from './components/Bookdetails';
import Body from './components/Body';
import Contact from './components/Contact';
import About from './components/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
      path:"/",
      element:<Body/>
    },
    {
      path:"/Bookdetails/:id",
      element:<Bookdetails/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/about",
      element:<About/>
    }
    ]
  }
])



root.render(
  <React.StrictMode>
    <RouterProvider router={approuter}/>
  </React.StrictMode>
);


