import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Converter from './pages/Converter'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Converter />} />
    </Routes>
  )
}
