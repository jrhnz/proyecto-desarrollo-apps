import React from 'react'
import { createRoot } from 'react-dom/client'
import { IonApp } from '@ionic/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IonApp>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IonApp>
  </React.StrictMode>
)
