import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Detailspage from './pages/Detailspage';
import Checkoutpage from './pages/Checkoutpage';

function App() {
  return (
    <Router>
      
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/details" element={<Detailspage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
      </Routes>
    </Router>
  );
}

export default App;