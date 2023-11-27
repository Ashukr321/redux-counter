import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Counter'
const App = () => {
  return (
    <div>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/counter' element={<Counter/>}/>
        </Routes>
      </Router>
    </Provider>
    </div>
  )
}

export default App
