import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './App.css';

import Dashboard from './Components/DashboardComponent/DashboardComponent';
import Form from './Components/FormComponent/FormComponent';
// import Product from './Components/ProductComponent/ProductComponent';
import Header from './Components/HeaderComponent/HeaderComponent';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
    this.getInventory = this.getInventory.bind(this);

  }

  componentDidMount() {
    this.getInventory();
  }

  getInventory() {
    axios.get('/api/inventory').then(response => {
      this.setState({
        products: response.data
      })
    });
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">

        <div className="header">
          <Header />
        </div>
        {/* <Switch> */}
        <div className="dashboard">
          <Dashboard products={products} getInventory={this.getInventory} />
        </div>

        <div className="form">
          <Form getInventory={this.getInventory} />
        </div>
        {/* </Switch> */}
      </div>
    );
  }
}
{/* <Switch>
  <Route path="/about" render={() => {
    return (
      <About>
        <Route path="/about/faq" component={FAQ} />
        <Route path="/about/company" component={Company} />
      </About>
    )
  }} />
  <Route path="/people/:id" component={Character} />
  <Route path="/people" component={People} />
  <Route path="/" component={Home} />
</Switch> */}

export default App;
