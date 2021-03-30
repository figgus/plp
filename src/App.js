import './App.css';
import {Navbar} from './components/Navbar'
import {GaleriaImagenes} from './components/GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from './components/SubirContenido/SubirContenido'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import {Login} from './components/Login/Login'
import {PanelAdmin} from './components/PanelAdmin/PanelAdmin'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
      
        <Route exact path='/' component={GaleriaImagenes} />
        <Route path='/subirContenido' component={SubirContenido} />
        <Route path='/login' component={Login} />
        <Route path='/panelControl' component={PanelAdmin} />
      </Router>
       
    </div>
  );
}

export default App;
