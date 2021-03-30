import './App.css';
import {Navbar} from './components/Navbar'
import {GaleriaImagenes} from './components/GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from './components/SubirContenido/SubirContenido'
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from './components/Login/Login'
import {PanelAdmin} from './components/PanelAdmin/PanelAdmin'
import {Provider} from 'react-redux'
import{store} from './redux/redux';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />

          <Route exact path='/' component={GaleriaImagenes} />
          <Route path='/subirContenido' component={SubirContenido} />
          <Route path='/login' component={Login} />
          <Route path='/panelControl' component={PanelAdmin} />
        </Router>
      </Provider>
      
       
    </div>
  );
}

export default App;
