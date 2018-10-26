import React from 'react';
import './index.css';
import {Confirmation} from './confirmation.jsx';



export class Rental extends React.Component {

render() {

  return (

    <div className='rentalItem'>
      <img className='itemImg' src={this.props.image} alt='image'></img>
      <p className='itemName'>{this.props.name}</p>
      <p className='itemPrice'>${this.props.price}</p>
      <p className='itemType'> {this.props.type}</p>
      <a href='/confirmation' className='itemButton' >Reserve</a>

    </div>







  );
}

}
