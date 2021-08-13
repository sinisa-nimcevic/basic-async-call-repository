import { Provider } from 'react-redux';
import ListView from './components/ListView/ListView';
import store from './redux/stores/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ListView />
      </div>
    </Provider>
  );
}

export default App;
