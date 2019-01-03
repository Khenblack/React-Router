import React, { Component } from 'react';
import Modal from '../Modal';

class StreamDelete extends Component {
  state = {
    showModal: true
  }

  renderModal = () => {
    //console.log(this.props.match.params.id);
    const actions = (
      <React.Fragment>
        <button className='ui button negative'>Delete</button>
        <button className='ui button'>Cancel</button>
      </React.Fragment>
    );
    if (this.state.showModal) {
      return (
        <Modal
          title='Delete Stream'
          content='Are ypu sure you want to delete this stream?'
          actions={actions}
          onDismiss={() => this.setState({ showModal: false })}
        />)
    }
  }

  render() {
    return (
      <div>
        StreamDelete
        {this.renderModal()}
      </div>
    );
  }
}

export default StreamDelete;