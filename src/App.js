import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import HomePage from './pages/homePage';
import MainLayout from './layouts/mainLayout';

function App() {
  return (
    <div className=' font-aeonik text-textColor'>
      <BrowserRouter>
    <Routes>
      <Route  path='/' element={<MainLayout/>}  >
          <Route index path='/' element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
