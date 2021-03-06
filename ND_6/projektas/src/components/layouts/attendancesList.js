import React from "react";
import { Table, PageHeader, Button, Modal } from "react-bootstrap";
import data from '../../MOCK_DATA_attendances.json';
import NewAttendance from "./newAttendance";
import "../styles/list.css";

export default class AttendancesList extends React.Component {
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
        <PageHeader>Attendances</PageHeader>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Add</Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <NewAttendance/>
            </Modal.Body>
        </Modal>
        <Table responsive>
        <thead>
            <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>STATUS</th>
                <th>REMARK</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.id}>
                    <td><a href={`/attendances/${item.id}`}>{item.id}</a></td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                    <td>{item.remark}</td>
                </tr>
            ))}
        </tbody>
        </Table>
        </div>
        );
    }
}
