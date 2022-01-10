import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { App } from '../App'
import { Return } from '../Return'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/return" element={<Return />} />

    </Routes>
  )
}
