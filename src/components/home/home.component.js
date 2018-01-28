import React, { Component } from 'react';
import Request from 'superagent';

import './home.component.css';

class HomeComponent extends Component {
  
  constructor() {
    super();
    this.state = {
      transferRequests: [],
      orders: []
    };
  }
  
  componentWillMount() {
    const prefix_url = 'http://localhost:3001/api';
    const transfer_request = '/transferRequests';
    const prescription_orders = '/prescriptionOrders';

    Request.get(prefix_url + transfer_request).then((response) => {
      this.setState({
        transferRequests: response.body
      });
    });

    Request.get(prefix_url + prescription_orders).then((response) => {
      this.setState({
        orders: response.body
      });
    });
  }

  render() {
    return (
      <div>
      <p>Orders: { this.state.orders.length }</p>
      <p>Transfer Requests: { this.state.transferRequests.length }</p>        
      </div>
    );
  }
}

export default HomeComponent;