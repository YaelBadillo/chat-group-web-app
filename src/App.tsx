import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { Dashboard, Home, LogIn, SignUp, ChannelChat, Channels } from './pages'

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
          <Route index element={<Channels />} />

          <Route path="channel/:channelId">
            <Route index element={<ChannelChat />} />
            <Route
              path="update"
              element={<h1 className="text-white">Update</h1>}
            />
            <Route
              path="delete"
              element={<h1 className="text-white">Delete</h1>}
            />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>

        <Route path="channel/search" />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
