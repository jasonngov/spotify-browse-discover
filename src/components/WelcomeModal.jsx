import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class WelcomeModal extends Component {
    constructor (props) {
        super(props)

        this.state = {
            showModal: true
        }
    }

    handleClose = () => {
        this.setState({showModal: false})
    }

    render() {
        const { showModal } = this.state

        return (
            <Modal show={showModal} onHide={this.handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Spotify React Redux App</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>I created this to help users browse quickly and to learn React.</p>
                  <p><b>Search</b> for your <i>favorite</i> artists.</p>
                  <p><b>Hover</b> over <i>tracks</i> and <i>albums</i> to listen.</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="success" onClick={this.handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
        )
    }
}

export default WelcomeModal