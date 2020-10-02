import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Imitems extends Component {
  state = {
    bikes: [],
    bike: {
      id:'',
      desc:'',
      eofu:'',
      oh:''

    }
  }

  componentDidMount() {
    this.getBikes();
  }
  getBikes = _ => {
    fetch('https://serene-plains-84450.herokuapp.com/items')
      .then(response => response.json())
      // .then((data)=>{
      //   console.log(data)
      .then(response => this.setState({ bikes: response.data }))
      .catch(err => console.error(err))
  }
  // addBike = _ => {
  //   const { bike } = this.state;
  //   fetch(`https://serene-plains-84450.herokuapp.com/items/add?im_item_no=${bike.im_item_no}&im_desc=${bike.im_desc}&im_uofm=${bike.im_uofm}&im_oh=${bike.im_oh}`)
  //     .then(this.getBikes)
  //     .catch(err => console.error(err))
  // }
  renderBikes = ({ im_item_no, im_desc, im_eofm, im_oh }) => <div key={im_item_no}>{im_item_no}{im_desc}{im_eofm}{im_oh}</div>
  render() {
    const { bikes, bike } = this.state;
   
    return (
      <div className="App">
        {bikes.map(this.renderBikes)}

        <div>

          <input

            value={bike.id}
            placeholder="item number"
            onChange={e => this.setState({ bike: { ...bike, im_item_no: e.target.value } })} />
          <input

            value={bike.desc}
            placeholder="item description"
            onChange={e => this.setState({ bike: { ...bike, im_desc: e.target.value } })} />
          <input
          
            value={bike.uofm}
            placeholder="item unit of measure"
            onChange={e => this.setState({ bike: { ...bike, im_uofm: e.target.value } })} />
          <input

            value={bike.oh}
            placeholder="item on hand"
            onChange={e => this.setState({ bike: { ...bike, im_oh: e.target.value } })} />
        </div>
      </div>
    );
  }
}


export default Imitems;
