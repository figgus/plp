import './App.css';
import {Navbar} from './components/Navbar'
import {GaleriaImagenes} from './components/GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from './components/SubirContenido/SubirContenido'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      
        <Route exact path='/' component={GaleriaImagenes} />
        <Route path='/subirContenido' component={SubirContenido} />
      </Router>
       
    </div>
  );
}

export default App;
