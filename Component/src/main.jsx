import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {Name ,Hello} from './App.jsx'  //importing the different functions from same component
import {Name as Identity ,Hello as Greet} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Identity />
    <Greet />
  </StrictMode>,
)
