
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Welcome from './components/Welcome';
import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Login from './components/Login';
import MainDisplay from './components/MainDisplay';
import StartQuiz from './components/StartQuiz';

function App() {


  return (
    <>


      <BrowserRouter>
        {/* <Navigation /> */}

        <Routes>
          <Route path='/' element={<Logo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/maindisplay' element={<MainDisplay />} />
          {/* <Route path='/startquiz' element={<StartQuiz />} />  */}
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
