import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './page/Home'

import { BrowserRouter } from 'react-router-dom'

import GlobalStyles from './styles/global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
)
