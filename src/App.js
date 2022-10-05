import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Singlecountry from './pages/Singlecountry';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
        <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/single/:countryName' element={<Singlecountry />} />
        </Routes>
        </div>
      <Footer />
    </Router>
  );
}

export default App;
