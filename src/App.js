import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Components/Home/Home'
import Leadership from './Components/Pages/Leadership/Leadership';
import About from './Components/Pages/About/About'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Pages/ContactUs/ContactUs';

function App() {
  return (
    <Router>

          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/leadership" element={<Leadership/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<ContactUs />} />
          </Routes>
          <Footer/>

    </Router>
  );
}

export default App;
