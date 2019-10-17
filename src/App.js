import './App.css';
import React from "react";
import { Provider } from "react-redux";
import store from './redux/configurestore/configurestore';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/HeaderComponent";
import Footer from './components/FooterComponent';
import { BrowserRouter } from 'react-router-dom';
import MainComponent from './components/MainComponent';



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





