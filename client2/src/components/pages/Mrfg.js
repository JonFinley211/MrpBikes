import React, { Component } from 'react';
import '../../App.css';


import { Button, Table, Card, Jumbotron, Container, Col, Row } from 'reactstrap';


class Mrfg extends Component {
  state = {
    mrfgbikes: [],
    mrfgbike: {
      mrfgid: '',
      mrfgdesc: '',
      mrfgtype: '',
      mrfgqty: '',
      mrfggross: ''


    },
    boxes: ['', '', '', '', '', '', '', ''],
    box: {
      boxid: '',
      boxdesc: '',
      boxtype: '',
      boxqty: '',
      boxgross: ''
    }
  }

  componentDidMount() {
    this.getmrfgBikes();
  }
  getmrfgBikes = _ => {
    fetch('https://serene-plains-84450.herokuapp.com/mrfg')
      .then(response => response.json())
      // .then((data)=>{
      //   console.log(data)
      .then(response => this.setState({ mrfgbikes: response.data }))
      .catch(err => console.error(err))
  }

  addmrfgBike = _ => {
    const { mrfgbike } = this.state;
    console.log(mrfgbike.mrfgqty)
    console.log("mrfg clicked")
    fetch(`https://serene-plains-84450.herokuapp.com/bomx?im_item_no=${mrfgbike.mrfgid}&grossqty=${mrfgbike.mrfgqty}`)
      .then(response => response.json())

      .then(response => this.setState({ boxes: response.data[0] }))

      .catch(err => console.error(err))
  }

  //-------------------------------------------------------------------

  rendermrfgBikes = ({ im_item_no, im_desc, im_itemtype }) => <tr key={im_item_no}><td>{im_item_no}</td><td>{im_desc}</td><td>{im_itemtype}</td></tr>
  aarendermrfgBikes = ({ im_item_no, im_itemtype }) => <ul key={im_item_no}><li>{im_item_no}</li><li>{im_itemtype}</li></ul>
  ddrendermrfgBikes = ({ im_item_no, im_desc }) => <option key={im_item_no} value={im_item_no} >{im_item_no} {im_desc}</option>
  xxrendermrfgBikes = ({ ps_component_item, im_desc, ps_qtyper, ps_uofm, grossqty, im_oh, netqty }) => <tr key={ps_component_item}><td>{ps_component_item}</td><td>{im_desc}</td><td align="right">{ps_qtyper}</td>{}<td align="center">{ps_uofm}</td><td align="right">{grossqty}</td><td align="right">{im_oh}</td><td align="right">{netqty}</td></tr>

  render() {
    const { mrfgbikes, mrfgbike, boxes } = this.state;
    return (

      <div className="services">
        <div align="center" >
          <h1 className="display-4">Material Requirements</h1>
        </div>
        <div className="container">
          <Card>
            <header align="center">
            <label >select a bike</label>
              <select
                onChange={e => this.setState({ mrfgbike: { ...mrfgbike, mrfgid: e.target.value  } })} >{mrfgbikes.map(this.ddrendermrfgBikes)}</select>
              <input type="text"
                selected value={mrfgbike.mrfgqty}
                placeholder="Quantity to Make"
                onChange={e => this.setState({ mrfgbike: { ...mrfgbike, mrfgqty: e.target.value } })} />
              <Button className='adimbtn btn' onClick={this.addmrfgBike} >Calculate</Button>


            </header>

            <Table size="sm" responsive className="table">
              <thead >
                <tr>
                  <th>Component Item</th>
                  <th> Description </th>
                  <th> Qty Per </th>
                  <th >PS UofM </th>
                  <th >GrossQty </th>
                  <th> OH </th>
                  <th> Net Qty Needed</th>

                </tr>
              </thead>


              {boxes.map(this.xxrendermrfgBikes)}</Table>








            {/*   
            <tr>
             
             
              
            
            <th>
              <input type="text"
              value={mrfgbike.mrfgqty}
              placeholder="Quantity Number"
              onChange={e => this.setState({ mrfgbike: { ...mrfgbike, mrfgqty: e.target.value } })} />

            </th>
             </tr> */}
            {/* <Button className='bomxbtn' onClick={this.addmrfgBike} >Calculate</Button> */}
          </Card>
        </div>

      </div>




    );
  }
}
export default Mrfg;