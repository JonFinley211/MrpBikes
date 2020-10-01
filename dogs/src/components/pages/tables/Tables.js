import React, { Component } from 'react';
import {
  Row,
  Col,
  Table,
  Progress,
  Button,
  UncontrolledButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Input,
  Label,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  Card
} from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import Widget from '../../Widget';
import './tables.css';

  class Tables extends Component {

    constructor(props) {
      super(props);
  
      this.state = {
        tableStyles: [
          {
            id: 1,
            picture: require('../../../images/tables/1.jpg'), // eslint-disable-line global-require
            description: 'Palo Alto',
            info: {
              type: 'JPEG',
              dimensions: '200x150',
            },
            date: new Date('September 14, 2012'),
            size: '45.6 KB',
            progress: {
              percent: 29,
              colorClass: 'success',
            },
          },
          {
            id: 2,
            picture: require('../../../images/tables/2.jpg'), // eslint-disable-line global-require
            description: 'The Sky',
            info: {
              type: 'PSD',
              dimensions: '2400x1455',
            },
            date: new Date('November 14, 2012'),
            size: '15.3 MB',
            progress: {
              percent: 33,
              colorClass: 'warning',
            },
          },
          {
            id: 3,
            picture: require('../../../images/tables/3.jpg'), // eslint-disable-line global-require
            description: 'Down the road',
            label: {
              colorClass: 'success',
              text: 'INFO!',
            },
            info: {
              type: 'JPEG',
              dimensions: '200x150',
            },
            date: new Date('September 14, 2012'),
            size: '49.0 KB',
            progress: {
              percent: 38,
              colorClass: 'inverse',
            },
          },
          {
            id: 4,
            picture: require('../../../images/tables/4.jpg'), // eslint-disable-line global-require
            description: 'The Edge',
            info: {
              type: 'PNG',
              dimensions: '210x160',
            },
            date: new Date('September 15, 2012'),
            size: '69.1 KB',
            progress: {
              percent: 17,
              colorClass: 'danger',
            },
          },
          {
            id: 5,
            picture: require('../../../images/tables/5.jpg'), // eslint-disable-line global-require
            description: 'Fortress',
            info: {
              type: 'JPEG',
              dimensions: '1452x1320',
            },
            date: new Date('October 1, 2012'),
            size: '2.3 MB',
            progress: {
              percent: 41,
              colorClass: 'primary',
            },
          },
        ],
        checkboxes1: [false, true, false, false],
        checkboxes2: [false, false, false, false, false, false],
        checkboxes3: [false, false, false, false, false, false],
      };
  
      this.checkAll = this.checkAll.bind(this);
    }
  
    parseDate(date) {
      this.dateSet = date.toDateString().split(' ');
      return `${date.toLocaleString('en-us', { month: 'long' })} ${this.dateSet[2]}, ${this.dateSet[3]}`;
    }
  
    checkAll(ev, checkbox) {
      const checkboxArr = (new Array(this.state[checkbox].length)).fill(ev.target.checked);
      this.setState({
        [checkbox]: checkboxArr,
      });
    }
  
    changeCheck(ev, checkbox, id) {
      const { checkboxes1, checkboxes2, checkboxes3 } = this.state;
      if(checkbox === "checkboxes1") {
        const checkedBox1 = checkboxes1[id] = ev.target.checked;
        this.setState({
          checkedBox1
        }) 
      } else if (checkbox === "checkboxes2") {
        const checkedBox2 = checkboxes2[id] = ev.target.checked;
        this.setState({
          checkedBox2,
        })      
      } else {
        const checkedBox3 = checkboxes3[id] = ev.target.checked;
        this.setState({
          checkedBox3
        })  
      }
  
  
      this.setState({
        [checkbox]: this.state[checkbox],
      });
    }
  
    render() {
      return (
        <div class="container">
          
         <h1 className="page-title mb-lg">Tables - <span className="fw-semi-bold">Basic</span></h1>
          <Row>
            <Col sm={12}>
           
                <Table borderless className="mainTable">
                  <thead>
                    <tr>
                      <th className="hidden-sm-down">#</th>
                      <th>Picture</th>
                      <th>Description</th>
                      <th className="hidden-sm-down">Info</th>
                      <th className="hidden-sm-down">Date</th>
                      <th className="hidden-sm-down">Size</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {
                    this.state.tableStyles.map(row =>
                      <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>
                          <img className="img-rounded" src={row.picture} alt="" height="60" />
                        </td>
                        <td>
                          {row.description}
                          {row.label &&
                          <div>
                            <Badge color={row.label.colorClass}>{row.label.text}</Badge>
                          </div>
                          }
                        </td>
                        <td>
                          <p className="mb-0">
                            <small>
                              <span className="fw-semi-bold">Type:</span>
                              <span className="text-muted">&nbsp; {row.info.type}</span>
                            </small>
                          </p>
                          <p>
                            <small>
                              <span className="fw-semi-bold">Dimensions:</span>
                              <span className="text-muted">&nbsp; {row.info.dimensions}</span>
                            </small>
                          </p>
                        </td>
                        <td className="text-semi-muted">
                          {this.parseDate(row.date)}
                        </td>
                        <td className="text-semi-muted">
                          {row.size}
                        </td>
                        <td className="width-150">
                          <Progress
                            style={{height: '7px'}}
                            color="success" value={row.progress.percent}
                            className="progress-sm mb-xs rounded mt-xs"
                          />
                        </td>
                      </tr>,
                    )
                  }
                  </tbody>
                </Table>
          
           
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
           
            </Col>
            <Col lg={6}>
           
          
            </Col>
          </Row>
        </div>
      );
    }
  
  }
  
  export default Tables;
  
