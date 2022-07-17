import './App.css';
import Main from './components/Main';
// import Title from './components/Title';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <div className='container'>
        <div className='content'>
          {/* <Title /> */}
          <Routes>
            <Route path='/' element={<Main/>} />
            <Route path='/log-in' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App;