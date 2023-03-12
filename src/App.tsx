import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Dashboard, Home, LogIn, SignUp } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />

        <Route path="auth">
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Route>

        <Route path="dashboard/*">
          <Route index element={<Dashboard />} />

          <Route path="channel/:channelId">
            <Route path="update" />
            <Route path="delete" />
          </Route>

          <Route path="channel/search" />

          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
