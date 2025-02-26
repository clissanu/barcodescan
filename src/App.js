import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Scanner from './pages/Scanner';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path ='/' exact element={<Home/>} />
          <Route path ='/scanner' exact element={<Scanner/>} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
