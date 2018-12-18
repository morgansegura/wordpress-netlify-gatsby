import React, { Component } from 'react'
import Modal from 'react-modal'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

Modal.setAppElement('#___gatsby')

class ContactForm extends Component {
    constructor() {
        super()

        this.state = {
            modalIsOpen: false,
            modal: this.props
        }

        this.openModal = this.openModal.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    openModal() {
        this.setState({ modalIsOpen: true })
    }

    afterOpenModal() {

    }

    closeModal() {
        this.setState({ modalIsOpen: false })
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <button className="" onClick={this.openModal}>Open Modal</button>
                <Modal
                    // ref={(modal) => { this.modal = modal }}
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}                    
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <form name="contact" method="POST" netlify>
                        <p>
                            <label>Your Name: <input type="text" name="name" /></label>
                        </p>
                        <p>
                            <label>Your Email: <input type="email" name="email" /></label>
                        </p>
                        <p>
                            <label>Your Role: <select name="role[]" multiple>
                                <option value="leader">Leader</option>
                                <option value="follower">Follower</option>
                            </select></label>
                        </p>
                        <p>
                            <label>Message: <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <button type="submit">Send</button>
                        </p>
                    </form>
                </Modal>            
            </div>

        )
    }
}

export default ContactForm