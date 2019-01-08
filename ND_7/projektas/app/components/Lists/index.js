import React from 'react';
import { Table, PageHeader, Button, Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Style from './style.css';

export default class List extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const { children, header, add } = this.props;
    return (
      <div className={Style.List}>
        <PageHeader>{header}</PageHeader>
        <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
          Add
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton />
          <Modal.Body>{add}</Modal.Body>
        </Modal>
        <Table responsive>{children}</Table>
      </div>
    );
  }
}
List.propTypes = {
  children: PropTypes.element,
  header: PropTypes.string,
  add: PropTypes.element,
};
