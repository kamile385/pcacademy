import React from "react";
import { Table, PageHeader, Button, Modal} from "react-bootstrap";
import data from '../../MOCK_DATA_programs.json';
import NewProgram from './newProgram';
import "../styles/list.css";

export default class ProgramsList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <div className="List">
      <PageHeader>Programs</PageHeader>
      <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Add</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <NewProgram/>
            </Modal.Body>
        </Modal>

        <Table responsive>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>GROUP GRADE</th>
                <th>DESCRIPTION</th>
            </tr>
        </thead>
        <tbody>
        {data.map((item) => (
                <tr key={item.id}>
                    <td><a href={`/programs/${item.id}`}>{item.id}</a></td>
                    <td>{item.name}</td>
                    <td>{item.group_grade}</td>
                    <td>{item.description}</td>
                </tr>
            ))}
        </tbody>
      </Table>
      </div>
    );
  }
}