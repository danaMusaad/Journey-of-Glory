import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Kings from './components/Kings';
import Achievements from './components/Achievements';
import KingsGallery from './components/KingsGallery';


function App() {
  return (
    <div className="App">

      <Navbar/>
      <Hero/>
      <KingsGallery/>
      <Kings/>
      <Achievements/>
      {/* <KingsGallery/> */}

    </div>
  );
}

export default App;
