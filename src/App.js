import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Landing from './landing';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Landing />
      </div>
    </Router>
  );
}

export default App;
