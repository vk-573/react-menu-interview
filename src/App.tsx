import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import Menu from "./pages/menu/menu";


// TODO add a a configurable layout with this.props.children && styled component structure

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="App-header">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/menu" component={Menu} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
