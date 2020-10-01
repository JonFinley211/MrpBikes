import React, { Component } from 'react';
import '../../App.css';

import { Jumbotron, Table, Button, Card, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Container, FormGroup, Form } from 'reactstrap';

class Item_Master extends Component {
  state = {
    bikes: [],
    bike: {
      id: '',
      desc: '',
      uofm: '',
      oh: '',
      type: ''

    },
    showModal: false,
  }

  componentDidMount() {
    this.getBikes();
  }
  getBikes = _ => {
    fetch('http://localhost:4000/items')
      .then(response => response.json())
      // .then((data)=>{
      //   console.log(data)
      .then(response => this.setState({ bikes: response.data }))
      .catch(err => console.error(err))
  }
  addBike = _ => {
    const { bike } = this.state;
    fetch(`http://localhost:4000/items/add?im_item_no=${bike.id}&im_desc=${bike.desc}&im_uofm=${bike.uofm}&im_oh=${bike.oh}&im_itemtype=${bike.type}`)
      .then(this.getBikes)

      .catch(err => console.error(err))
  }

  toggleModal() {
    this.state = { showLogOut: false }
  }

  renderBikes = ({ im_item_no, im_itemtype, im_desc, im_uofm, im_oh }) => <tr key={im_item_no}><td>{im_item_no}</td><td>{im_desc}</td><td align="center">{im_itemtype}</td><td align="center">{im_uofm}</td><td align="right">{im_oh}</td></tr>

  render() {
    const { bikes, bike } = this.state;

    return (

      <div className="services">
        <div align="center">


          <h1 align="center" className="display-3 p-3">Item Master</h1>

        </div>
        <div></div>
        <div align="center" className="container">
          <Card>
            <header align="center">
              <Button onClick={() => this.setState({ showLogOut: true })}>Add an Item(Bike)</Button>
              {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
              <Modal size="xl"
                align="center" isOpen={this.state.showLogOut} fade="false" toggle={() => this.setState({ showLogOut: false })}>
                <ModalHeader align="center" toggle={() => this.setState({ showLogOut: false })}>Input an Item</ModalHeader>
                <ModalBody >
                  <Container>
                    {/* <Row xs="5">
                      <Col>Item Number</Col>
                      <Col>Description</Col>
                      <Col>Item Type</Col>
                      <Col>Unit of Measure</Col>
                      <Col>On-Hand</Col>
                    </Row> */}
                    <Form>
                      <Row form xs="1" sm="2" md="5">
                        <Col  sm >
                          <FormGroup>
                            <label id="it">ItemNumber:</label>
                            <input
                              id="it"
                              type="text"
                              value={bike.id}
                              placeholder="Item Number"
                              onChange={e => this.setState({ bike: { ...bike, id: e.target.value } })} />
                          </FormGroup>
                        </Col>
                        <Col sm align="left">
                          
                          
                            <label id="de">Description:</label>
                           
                            
                            <input
                              id="de"
                              type="text"
                              value={bike.desc}
                              placeholder="Description"
                              onChange={e => this.setState({ bike: { ...bike, desc: e.target.value } })} />
                          
                        </Col>
                        <FormGroup>
                          <Col sm align="left">
                            <label id="type">Type:</label><br></br>
                            <select id="type" value={bike.type} onChange={e => this.setState({ bike: { ...bike, type: e.target.value } })} >

                              <option value="fg" selected>fg</option>
                              <option value="assy">assy</option>

                            </select>
                      
                      </Col>
                      </FormGroup>
                        <Col sm align="left">
                          <label>
                            Measure :</label>
                          <input
                            type="text"
                            value={bike.uofm}
                            placeholder="Item Unit of Measure"
                            onChange={e => this.setState({ bike: { ...bike, uofm: e.target.value } })} />
                        </Col>
                        <Col sm align="left">
                          <label>
                            on hand :</label>  <input
                            type="text"
                            value={this.state.bike.oh}
                            placeholder="item on hand"
                            onChange={e => this.setState({ bike: { ...bike, oh: e.target.value } })} />
                        </Col>
                      </Row>
                    </Form>
                  </Container>
                </ModalBody>
                <ModalFooter>
                  <Button align="center" className='adimbtn btn' onClick={this.addBike}>Add an Item</Button>
                  <Button color="info">Cancel</Button>
                </ModalFooter>
              </Modal>
            </header>
            <Table size="sm" responsive className="table">
              <thead>
                <tr>
                  <th>Item Number</th>
                  <th>Description</th>
                  <th>Item Type</th>
                  <th>Unit of Measure</th>
                  <th>On-Hand</th>
                </tr>
              </thead>
              {bikes.map(this.renderBikes)}
            </Table>
            {/* <Button className='adimbtn' onClick={this.addBike}>Add an Item</Button> */}
          </Card>
        </div>
        <div>
        </div>
      </div>
    );
  }
}
export default Item_Master;

