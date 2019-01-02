import React from "react";
import { Table, PageHeader, Button, Modal } from "react-bootstrap";
import data from '../../MOCK_DATA_students.json';
import NewStudent from './newStudent';
import "../styles/list.css";

export default class StudentsList extends React.Component {
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
            <PageHeader>Students</PageHeader>
            <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Add</Button>
            <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <NewStudent/>
                </Modal.Body>
            </Modal>
            <Table responsive>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>STUDENT NAME SURNAME</th>
                    <th>PARENT NAME SURNAME</th>
                    <th>ADDRESS</th>
                    <th>TELEPHONE</th>
                    <th>EMAIL</th>
                    <th>GROUP</th>
                    <th>IDENTIFICATION NUMBER</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td><a href={`/students/${item.id}`}>{item.id}</a></td>
                        <td>{item.student_name_surname}</td>
                        <td>{item.parent_name_surname}</td>
                        <td>{item.address}</td>
                        <td>{item.telephone}</td>
                        <td>{item.email}</td>
                        <td>{item.group}</td>
                        <td>{item.identification_number}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
            </div>
        );
    }
}

