import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditTipoDeGastoForm from '../Forms/EditTipoDeGastoForm';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class TipoDeGastoModal extends Component {

  closeModal = () => {
    this.props.CloseModal();
  };

  render () {
    return (
      <Modal isOpen={this.props.modalIsOpen}>
        <ModalHeader >Editar Tipo De Gasto</ModalHeader>
        <ModalBody>
          <EditTipoDeGastoForm currentItem={this.props.currentItem} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.closeModal}>Cerrar</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps= (reduxState, ownProps) => {
  return {
    modalIsOpen: reduxState.GenericReducer.modalIsOpen,
  }
};

const mapDispatchToProps= (dispath) =>{
  return {
    CloseModal: ()=>{dispath(allActions.GenericAction.closeModal())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TipoDeGastoModal);
