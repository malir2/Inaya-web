import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import "./App.css";
import { ThemeProvider } from './context/ThemeChanger';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App