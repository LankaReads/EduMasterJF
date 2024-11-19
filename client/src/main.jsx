import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, RouterProvider } from 'react-router-dom' 
import { router } from './router.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "react-redux"
import store from './store/store.js'
import './index.css'
import App from './App.jsx';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)