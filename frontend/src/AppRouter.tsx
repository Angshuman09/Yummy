import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
function AppRouter() {

  return (
    <Routes>
      <Route path='/' element={<Layout>HOME PAGE</Layout>}/>
      <Route path='/user-profile' element={<div className='w-full h-screen bg-slate-800 text-slate-500 flex justify-center items-center'>login page</div>}/>
      <Route path='*' element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}

export default AppRouter
