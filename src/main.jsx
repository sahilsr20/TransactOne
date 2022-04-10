import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../pages/Home'
import Transactions from '../pages/Transactions'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import App from './App'
import IndexPage from '../pages/IndexPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path ='/' element={<App/>}>
          <Route index element={<IndexPage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/transactions' element={<Transactions/>}/>
        </Route>
    </Routes>
</BrowserRouter>  
  </React.StrictMode>,
  document.getElementById('root')
)
