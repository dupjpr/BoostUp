import { Provider } from "react-redux";

import store from './store/store';

import './utilities/Normalize.scss';
import Home from "./components/Home/Home";

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
