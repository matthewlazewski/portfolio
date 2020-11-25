import Footer from './components/footer'
import './App.css';
import Certification from './components/certification';
import headshot from './images/headshot.jpg'

const App = () => {
  return (
    <div className = "App">
      <div className="wrapper">
        <img src={headshot} alt="headshot" width='300' height='300' />
      </div>
      <div>
        <Certification/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
