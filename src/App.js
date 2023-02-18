import './css/App.css';
import { BrowserRouter } from "react-router-dom";
import LandingPage from './pages/landing';
import TradersLanding from './pages/traders';
import InvestorsLanding from './pages/investors';
import Dashboard from './pages/Dashboard';
import { Routes, Route } from "react-router-loading";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} loading />
          <Route path='/traders' element={<TradersLanding />} loading  />
          <Route path='/investors' element={<InvestorsLanding />} loading  />
          <Route path='/Dashboard' element={<Dashboard />} loading  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
