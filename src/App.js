import './App.css';
import store from './redux/store'
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import UserContainer from './components/UserContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <CakeContainer></CakeContainer> */}
      <UserContainer></UserContainer>
    </div>
    </Provider>
  );
}

export default App;
