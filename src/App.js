import './App.css';
import Approuter from './routes/Approuter';
import { Provider } from 'react-redux';
import { store, persistor } from '../src/redux/Store'

import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div className="App">
        <Approuter />
      </div>
    </PersistGate>
  </Provider>

  );
}

export default App;
