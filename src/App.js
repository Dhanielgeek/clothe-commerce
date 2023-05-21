import React from 'react'
import {Home, ProductDetails} from './Pages'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import {Footer,Header,Sidebar} from './Components'

const App = () => {
  return (
    <div className='overflow-hidden '>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
        <Sidebar/>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
