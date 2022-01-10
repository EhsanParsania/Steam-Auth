import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { App } from '../App'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  )
}
