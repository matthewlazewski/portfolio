import Footer from './components/footer'
import './App.css';
import Certification from './components/certification';

const App = () => {
  return (
    <div className = "App">
      <div className="wrapper">
        <h1>Matt Lazewski</h1>
      </div>
      <div>
        <Certification/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
