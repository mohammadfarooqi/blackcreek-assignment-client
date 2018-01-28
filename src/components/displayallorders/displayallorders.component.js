import React, { Component } from 'react';
import './displayallorders.component.css';

class DisplayAllOrders extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newItems: [],
      inProgressItems: []
    };
  }

  componentWillReceiveProps(nextProps) {
    // console.log(nextProps)

    const result = this.finalizeOutput(nextProps.orders, nextProps.transferRequests);

    this.setState({
      newItems: result.newItems,
      inProgressItems: result.inProgressItems
    });
  }

  finalizeOutput(orders, transferRequests) {
    // example structure
    // {
    //   status: 'new',
    //   patientName: 'Mohammad',
    //   drugName: 'Drug Mohammad'
    // }
    
    const newItems = [];
    const inProgressItems = [];

    // remove archeived from result sets of order and transferRequests
    // set type of order so we can later render red/blue bg
    orders.map(item => {
      if (item.status !== 'archived') {
        item['type'] = 'order';

        if (item.status === 'new') {
          newItems.push(item);
        } else if (item.status === 'inProgress') {
          inProgressItems.push(item);
        }
      } 

      return item;
    });

    transferRequests.map(item => {
      if (item.status !== 'archived') {
        item['type'] = 'transfer';
        if (item.status === 'new') {
          newItems.push(item);
        } else if (item.status === 'inProgress') {
          inProgressItems.push(item);
        }
      }

      return item;
    });


    return { newItems, inProgressItems };
  }

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <button type="button" className="btn btn-primary" onClick={this.props.refreshData}>Refresh List</button>
        </div>

        <div className="col-12 mt-2">
          <h5 className="mt-2">New</h5>
          <ul className="list-group">
            {this.state.newItems.map((item, index) => 
              <li className={"list-group-item " + (item.type === 'order' ? 'bg-red' : 'bg-blue')} key={index}>
                <p className="mb-0">
                  <span>Patient: {item.patientName}</span>
                  <br/>
                  <span>Drug: {item.drugName}</span>
                </p>
              </li>
            )}
          </ul>
        </div>

        <div className="col-12 mt-2">
          <h5 className="mt-2">In Progress</h5>
          <ul className="list-group">
            {this.state.inProgressItems.map((item, index) => 
              <li className={"list-group-item " + (item.type === 'order' ? 'bg-red' : 'bg-blue')} key={index}>
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
