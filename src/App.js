
import logo from './logo.svg';
import './App.css';
import Header from './../src/components/Header'
import Main from './components/Maiin';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


import React, { Component } from 'react'
import ItemProduct from './components/ItemProduct/ItemProduct';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
          <Header />
          {this.showContentMenus(routes)}
      </div>
      <Footer/>
      </Router>
    )
  }
  showContentMenus = (routes) => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.main}
                />
            );
        });
    }
    
  return <Switch>{result}</Switch> ;
}
}


export default App;
