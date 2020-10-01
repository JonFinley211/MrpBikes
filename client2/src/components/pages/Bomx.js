import React, { Component } from 'react';
import '../../App.css';

import { Table, Button, Jumbotron, Container, Card } from 'reactstrap';

class Bomx extends Component {

  state = {
    mrfgbikes: [],
    mrfgbike: {
      mrfgid: '',
      mrfgdesc: '',
      mrfgtype: '',
      mrfgqty: '',
      mrfggross: ''


    },
    lboxes: ['', '', '', '', '', '', '', ''],
    lbox: {
      lboxid: '',
      lboxdesc: '',
      lboxtype: '',
      lboxqty: '',
      lboxgross: ''
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
  lladdmrfgBike = _ => {
    const { mrfgbike } = this.state;
    this.setstate = {
      lboxes: ['', '', '', '', '', '', '', ''],
    }
    console.log("hi")

    console.log(mrfgbike.mrfgid)

    console.log("llmrfg clicked")
    fetch(`https://serene-plains-84450.herokuapp.com/boml?im_item_no=${mrfgbike.mrfgid}`)
      .then(response => response.json())

      .then(response => this.setState({ lboxes: response.data[0] }))

      .catch(err => console.error(err))
  }


  rendermrfgBikes = ({ im_item_no, im_desc, im_itemtype }) => <tr key={im_item_no}><td>{im_item_no}</td><td>{im_desc}</td><td>{im_itemtype}</td></tr>

  ddrendermrfgBikes = ({ im_item_no, im_itemtype, im_desc }) => <option key={im_item_no} value={im_item_no}>{im_item_no} {im_desc}</option>
  llrendermrfgBikes = ({ ps_parent_item, ps_component_item, im_desc, im_itemtype, ps_qtyper, ps_uofm }) => <tr key={ps_parent_item}><td>{ps_parent_item}</td><td>{ps_component_item}</td><td>{im_desc}</td><td align="center">{im_itemtype}</td><td align="right">{ps_qtyper}</td><td align="center">{ps_uofm}</td></tr>

  render() {
    const { mrfgbikes, mrfgbike, lboxes } = this.state;
    return (
      <div className="services">
     <div>
    
        <h1 align="center" className="display-3">Bill of Materials</h1>
    
    
      <div class="container">
<Card>
<header align="center">
              {/* <div class="dropdown"> */}
               
                  <label for="parts">Choose an Item: </label>
                  <br>
                  </br>
                  <select
                    onChange={e => this.setState({ mrfgbike: { ...mrfgbike, mrfgid: e.target.value } })} >{mrfgbikes.map(this.ddrendermrfgBikes)}</select>




<br></br>


                  <Button className='llbtn btn' onClick={this.lladdmrfgBike} >View Components</Button>
               
                  </header>

              <Table size="sm" responsive className="table">
                <thead >
                  <tr>
                    <th>Parent Item</th>
                    <th>Component Item</th>
                    <th> Description </th>
                    <th> Item Type</th>
                    <th >Qty Per</th>
                    <th >PS Unit of Measure </th>



                  </tr>
                </thead>
                {lboxes.map(this.llrendermrfgBikes)}</Table>








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
              <br></br>
              <br></br>

              {/* </LayoutComponent> */}

              <div>



              </div>

            </div>
        
        
            </div>


    );
  }
}
export default Bomx;