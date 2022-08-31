import React from 'react'
import Home from './pages/Home'
import News from './pages/News'
import { Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to='/' style={{marginRight: '14px'}}>go to home page</Link>
      <Link to='/news'>go to news page </Link>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news' element={<News/>}/>
      </Routes>
    </div>
  )
}

export default App