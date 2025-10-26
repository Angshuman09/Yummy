import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Home from './pages/Home'
import AuthCallbackPage from './pages/AuthCallbackPage'
function AppRouter() {

  return (
    <Routes>
      <Route path='/' element={<Layout><Home /></Layout>} />
      <Route path='/auth-callback' element={<AuthCallbackPage/>}/>
      <Route path='/user-profile' element={<div className='w-full h-screen bg-slate-800 text-slate-500 flex justify-center items-center'>login page</div>} />
      <Route path='*' element={<Navigate to={'/'} />} />
    </Routes>
  )
}

export default AppRouter
