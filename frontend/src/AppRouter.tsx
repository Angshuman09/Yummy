import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
function AppRouter() {

  return (
    <Routes>
      <Route path='/' element={<div className='bg-slate-800 text-slate-400 flex w-full h-screen justify-center items-center'>This is Root</div>}/>
      <Route path='/signup' element={<div className='w-full h-screen bg-slate-800 text-slate-500 flex justify-center items-center'>login page</div>}/>
      <Route path='*' element={<Navigate to={'/'}/>}/>
    </Routes>
  )
}

export default AppRouter
