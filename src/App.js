import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Components/Home/Home'
import Leadership from './Components/Leadership/Leadership';
import Navbar from './Components/Navbar/Navbar'
import './Styles/App.css';

function App() {
  return (
    <Router>

          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/leadership" element={<Leadership/>} />
          </Routes>

        {/* Footer Goes Here */}

    </Router>
  );
}

export default App;
