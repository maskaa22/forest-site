
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Benefit from './components/Benefit';
import Galery from './components/Galery';
import Header from './components/Header';
import News from './components/News';
import Foter from './components/Foter';

function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Galery/>
      <Benefit/>
      <News/>
      <Contact/>
      <Foter/>
    </div>
  );
}

export default App;
