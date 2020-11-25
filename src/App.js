import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Certification from './components/certification';
import Projects from './components/projects';
import headshot from './images/headshot.jpg';

const App = () => {
  return (
    <div className = "App">
      <div className="wrapper">
        <div>
          <img src={headshot} alt="headshot" width='300' height='300' />
        </div>
        <Certification/>
        <Projects />
        <Footer/>
      </div>
    </div>
  );
}

export default App;
