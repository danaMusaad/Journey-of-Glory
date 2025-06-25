import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Kings from './components/Kings';
import Achievements from './components/Achievements';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Hero/>
      <Kings/>
      <Achievements/>

    </div>
  );
}

export default App;
