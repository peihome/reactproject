import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ConfirmDeleteModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header>
                    <Modal.Title>Confirm Deletion</Modal.Title>
                        <i className="bi bi-x" onClick={this.props.onHide}>
                    </i>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete this employee record?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={this.props.onConfirm}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

ConfirmDeleteModal.propTypes = {
    show: PropTypes.bool.isRequired,
    onHide: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired
};