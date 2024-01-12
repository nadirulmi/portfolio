import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "./config/i18next.config.js"
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next'

import global_en from "../public/locales/en/global.json"
import global_es from "../public/locales/es/global.json"

i18next.init({
  interpolation:{escapeValue: false},
  lng: "en",
  resources:{
    es:{
      global: global_es
    },
    en:{
      global: global_en
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </I18nextProvider>
  
  
)
