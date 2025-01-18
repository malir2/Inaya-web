import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import "./App.css";
import { ThemeProvider } from './context/ThemeChanger';
import SignIn from './pages/SignIn';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <ThemeProvider>
      <Chatbot />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App