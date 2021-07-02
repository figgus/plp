import './App.css';
import {Provider} from 'react-redux'
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
