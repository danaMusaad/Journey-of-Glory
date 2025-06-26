import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Kings from './components/Kings';
import Achievements from './components/Achievements';
import KingsGallery from './components/KingsGallery';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';




function App() {
  return (
    <div className="App">

      <Navbar/>
      <Hero/>
      <KingsGallery/>
      <Kings/>
      <Achievements/>
      <AboutSection/>
      <Footer/>

    </div>
  );
}

export default App;
