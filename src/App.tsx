import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import { ThemeProvider } from './context/ThemeChanger';
import SignIn from './pages/SignIn';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App