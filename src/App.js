import './App.css';
import HomePage from './HomePages/HomePage';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

import { InfoProvider } from './context/Context';
import SearchPage from './navbarComponents/SearchPage';
import YourRides from './navbarComponents/YourRides';
import AddRidePage from './navbarComponents/AddRidePageFile/AddRidePage';
import NewsPage from './navbarComponents/NewsPage';
import Profile from './navbarComponents/ProfileFile/Profile';
import PaymendRefund from './navbarComponents/PaymendRefund';


function App() {
  return (
    <div className='bg-gradient-to-r from-[#39393A] to-[#555557] overflow-hidden'>
      <InfoProvider>
        <Router>
          <Routes>

            <Route exact path='/' element={<HomePage />} />
            <Route path='/searchPage' element={<SearchPage />} />
            <Route path='/addRidePage' element={<AddRidePage />} />
            <Route path='/yourRides' element={<YourRides />} />
            <Route path='/newsPage' element={<NewsPage />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/paymentRefund' element={<PaymendRefund />} />


          </Routes>
        </Router>

      </InfoProvider>
    </div>
  );
}

export default App;
