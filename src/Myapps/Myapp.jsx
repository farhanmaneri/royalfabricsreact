import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'



export default function MyApp() {
    return (
        <BrowserRouter>
           
                <Routes />
            
          
        </BrowserRouter>
    )
}