import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-loading";
import './css/App.css';
import LandingPage from './pages/landing';
import Dashboard from './pages/Dashboard';
import ComingSoon from './pages/comingSoon';
import AboutUs from "./pages/aboutUs";

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} loading />
          <Route path='/traders' element={<ComingSoon nav={'traders'} />} loading  />
          <Route path='/investors' element={<ComingSoon nav={'investors'} />} loading  />
          <Route path='/Dashboard' element={<Dashboard />} loading  />
          <Route path='/blog' element={<ComingSoon nav={'blog'} />} loading  />
          <Route path='/about-us' element={<AboutUs />} loading />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
