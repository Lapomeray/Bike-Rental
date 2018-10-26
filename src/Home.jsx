import React from 'react';
import './index.css';

import logo from './logo.svg';
import './App.css';
import './normalize.css';
import './bikerentals.json';
import bikeRentalData from './bikerentals.json'

import {Rental} from './rental.jsx';



export class Home extends React.Component {

  constructor(props) {
          super(props);
          this.state = {
            items: []
          }
      }

      componentDidMount() {

        this.setState({
          items: bikeRentalData.products,
        });

      }

render() {

  return (

<div className='homeDiv'>

    {this.state.items.map(function(value){
      return <Rental
        image={value.image}
        price={value.price}
        name={value.name}
        type={value.product_type}
        />;
        })}

        </div>







  );
}

}
