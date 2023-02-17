import './css/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/landing';
import TradersLanding from './pages/traders';
import InvestorsLanding from './pages/investors';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/traders' element={<TradersLanding />} />
          <Route path='/investors' element={<InvestorsLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
