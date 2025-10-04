import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Layout from './components/common/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductListing from './components/farmers/ProductListing';
import Dashboard from './components/farmers/Dashboard';
import MarketPlace from './components/buyers/MarketPlace';
import Orders from './components/buyers/Orders';
import './styles/globals.css';
import './styles/themes.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/farmers/products" component={ProductListing} />
          <Route path="/farmers/dashboard" component={Dashboard} />
          <Route path="/buyers/marketplace" component={MarketPlace} />
          <Route path="/buyers/orders" component={Orders} />
        </Switch>
      </Layout>
      <Footer />
    </Router>
  );
};

export default App;