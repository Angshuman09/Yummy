import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Home from './pages/Home'
import AuthCallbackPage from './pages/AuthCallbackPage'
import UserProfilePage from './pages/UserProfilePage'
function AppRouter() {

  return (
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
      <Route path='/user-profile' element={<Layout>< UserProfilePage /></Layout>} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default AppRouter