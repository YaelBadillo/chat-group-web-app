import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Dashboard, Home, LogIn, SignUp, ChannelChat } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="auth">
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<LogIn />} />
        </Route>

        <Route path="dashboard/*" element={<Dashboard />}>
          <Route index element={<></>} />

          <Route path="channel/:channelId" element={<ChannelChat />}>
            <Route index element={<></>} />
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
