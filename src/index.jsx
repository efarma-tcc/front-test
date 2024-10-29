import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';

import { RouterProvider } from "react-router-dom";
import { router } from './Pages/routes'
import Header from './Components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
