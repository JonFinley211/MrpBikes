import React, { Component } from 'react';
import '../../App.css';

import { Table, Button, Card } from 'reactstrap';

class Product_Structure extends Component {
  state = {
    bikeparts: [],
    bikepart: {
      psid: '',
      pscompin: '',
      qtyper: '',
      uofm: '',
      

    }
  }

  componentDidMount() {
    this.getBikeParts();
  }
  getBikeParts = _ => {
    fetch('https://serene-plains-84450.herokuapp.com/psitems')
      .then(response => response.json())
      // .then((data)=>{
      //   console.log(data)
      .then(response => this.setState({ bikeparts: response.data }))
      .catch(err => console.error(err))
  }
  addBikePart = _ => {
    const { bikepart } = this.state;
    fetch(`https://serene-plains-84450.herokuapp.com/psitems/add?ps_parent_item=${bikepart.psid}&ps_component_item=${bikepart.pscompin}&ps_qtyper=${bikepart.qtyper}&ps_uofm=${bikepart.uofm}`)
      .then(this.getBikeParts)
      .catch(err => console.error(err))
  }
  renderBikeParts = ({ ps_parent_item, ps_component_item, ps_qtyper, ps_uofm }) => <tr key={ps_parent_item}><td>{ps_parent_item}</td><td>{ps_component_item}</td><td align="center">{ps_qtyper}</td><td align="center">{ps_uofm}</td></tr>

  render() {
    const { bikeparts, bikepart } = this.state;
    return (
      <div className="services">
      <div align="center">
     
      <h1 class className="display-3">Product Structure</h1>
      </div>
     
        <div class="container">
     
      <Card>
  <header></header>
        <Table size="small" responsive classNamer="table">
          
          <thead>
            <tr>
              <th> Parent Item</th>
              <th> Component Item</th>
              <th>Quantity Per
              </th>
              <th>Unit of Measure</th>
            </tr>
          </thead>
          
          {bikeparts.map(this.renderBikeParts)}




          
            {/* <th><input
              type="text"
              value={bikepart.psid}
              placeholder="Parent Item"
              onChange={e => this.setState({ bikepart: { ...bikepart, psid: e.target.value } })} />
            </th>
            <th> <input
              type="text"
              value={bikepart.pscompin}
              placeholder="Component Item"
              onChange={e => this.setState({ bikepart: { ...bikepart, pscompin: e.target.value } })} />
            </th>
            <th>
              <input
                type="text"
                value={bikepart.qtyper}
                placeholder="Quantity Per"
                onChange={e => this.setState({ bikepart: { ...bikepart, qtyper: e.target.value } })} />
            </th>
            <th><input
              type="text"
              value={this.state.bikepart.uofm}
              placeholder="Unit of Measure "
              onChange={e => this.setState({ bikepart: { ...bikepart, uofm: e.target.value } })} />
              {/* <input type="text" value={this.state.value} onChange={this.handleChange} /> */}
            
        
           
          <Button className='adimbtn' onClick={this.addBikePart}>Add Component</Button>
          
        </Table>
        </Card>
        </div>
        <br></br>
        <br></br>
       
        {/* </LayoutComponent> */}
      
        <div>
      
        </div>

        </div>



    );
  }
}
  export default Product_Structure;


