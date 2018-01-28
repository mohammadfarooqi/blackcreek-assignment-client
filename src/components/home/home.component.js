import React, { Component } from 'react';
import Request from 'superagent';

import DisplayAllOrders from '../displayallorders/displayallorders.component';

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
    this.getData();
  }
  
  getData() {
    // console.log('getData Called');

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
      <div className="row">
        <div className="col-12 mt-3">
          <DisplayAllOrders 
            orders={this.state.orders} 
            transferRequests={this.state.transferRequests} 
            refreshData={this.getData.bind(this)}
          ></DisplayAllOrders>
        </div>
      </div>
    );
  }
}

export default HomeComponent;