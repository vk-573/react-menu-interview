import React from "react";
import "./styles/App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ThemeProvider } from "./Theme";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import Home from "./pages/home/home";
import Menu from "./pages/menu/menu";

// TODO add a a configurable layout with this.props.children && styled component structure

function App() {
  return (
    <Router>
      <div className="App">
        <ThemeProvider>
          <Header />
          <div className="main-layout">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
            </Switch>
          </div>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
