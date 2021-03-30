import './App.css';
import {Navbar} from './components/Navbar'
import {GaleriaImagenes} from './components/GaleriaImagenes/GaleriaImagenes'
import {SubirContenido} from './components/SubirContenido/SubirContenido'
import {BrowserRouter as Router,Route} from "react-router-dom";
import {Login} from './components/Login/Login'
import {PanelAdmin} from './components/PanelAdmin/PanelAdmin'
import {Provider,useSelector,useDispatch} from 'react-redux'
import{store} from './redux/redux';
import {WraperApp} from './components/WraperApp/WraperApp'

function App() {
  
  return (
    <div>
      <Provider store={store}>
        <WraperApp/>
      </Provider>
      
       
    </div>
  );
}

export default App;
