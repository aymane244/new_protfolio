import './App.css';
import './assets/css/responsive.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Navbar from './components/Layout/Navbar';
import LangContext from './context/LangContext';

function App() {
  return (
    <div>
      <LangContext>
        <Navbar/>
      </LangContext>
    </div>
  );
}

export default App;
