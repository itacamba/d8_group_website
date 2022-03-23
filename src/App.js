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
import Events from './Components/Pages/Events/Events';
import Podcast from './Components/Pages/Podcast/Podcast';
import Clients from './Components/Pages/Clients/Clients';
import Reports from './Components/Pages/Reports/Reports';

function App({client}) {
  return (
    <Router>

          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/leadership" element={<Leadership/>} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/clients" element={<Clients />} />
            <Route exact path="/contact" element={<ContactUs />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/podcast" element={<Podcast />} />
            <Route exact path="/reports" element={<Reports  client={client}/>} />
          </Routes>
          <Footer/>

    </Router>
  );
}

export default App;
