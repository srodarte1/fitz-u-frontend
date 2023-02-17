import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import "./styles.css";
import {ContextProvider} from './Context'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <BrowserRouter>
    <ContextProvider>
        <App />
    </ContextProvider>
    </BrowserRouter>
)