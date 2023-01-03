import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Dashboard, Home, LogIn, SignUp } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/auth/login" element={<LogIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
