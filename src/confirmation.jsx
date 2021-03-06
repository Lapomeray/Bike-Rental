import React from 'react';
import './index.css';


export class Confirmation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      confirm: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
   handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      this.setState({
        value: event.target.value,
        confirm: 'Bike Reservation Complete'

      });

      event.preventDefault();
    }


render() {
  return (



    <div>

      <form onSubmit={this.handleSubmit}>
       <label>
         <input type="text" value={this.state.value} onChange={this.handleChange} placeholder='Full Name' required/>
       </label>
       <input type="submit" value="Submit" />
     </form>

        <p>{this.state.confirm}</p>


    </div>




  );
}

}
