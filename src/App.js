import './App.css';
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/HeaderComponent";
import Footer from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';


const store = createStore(reducer);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <MainComponent />
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;





