import React, { Component } from 'react';
import './displayallorders.component.css';

class DisplayAllOrders extends Component {

  constructor(props) {
    super(props);

    this.state = {
      list_result: []
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)

    const result = this.finalizeOutput(nextProps.orders, nextProps.transferRequests);

    this.setState({
      list_result: result
    });
  }

  finalizeOutput(orders, transferRequests) {
    // example structure
    // {
    //   status: 'new',
    //   patientName: 'Mohammad',
    //   drugName: 'Drug Mohammad'
    // }

    const result = [];

    // remove archeived from result sets of order and transferRequests
    orders.map(item => {
      if (item.status !== 'archived') {
        result.push(item);
      }

      return item;
    });

    transferRequests.map(item => {
      if (item.status !== 'archived') {
        result.push(item);
      }

      return item;
    });

    return result;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={this.props.refreshData}>Refresh List</button>
        </div>

        <div className="col-12 mt-2">
          <ul className="list-group">
            {this.state.list_result.map((item, index) => 
              <li className="list-group-item" key={index}>
                <p className="mb-0">
                  <span>Patient: {item.patientName}</span>
                  <br/>
                  <span>Drug: {item.drugName}</span>
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default DisplayAllOrders;
