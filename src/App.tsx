import React from "react";
import "./styles/App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { ThemeProvider } from "./Theme";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Layout from "./components/layout/layout";

import Home from "./pages/home/home";
import Menu from "./pages/menu/menu";

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <ThemeProvider>
          <Header />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/menu" component={Menu} />
            </Switch>
          </Layout>
          <Footer />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
