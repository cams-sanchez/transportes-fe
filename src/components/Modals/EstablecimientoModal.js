import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditEstablecimientoForm from '../Forms/EditEstablecimientoForm';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class EstablecimientoModal extends Component {

  closeModal = () => {
    this.props.CloseModal();
  };

  render () {
    return (
      <Modal isOpen={this.props.modalIsOpen}>
        <ModalHeader >Editar Establecimiento</ModalHeader>
        <ModalBody>
          <EditEstablecimientoForm
            currentItem={this.props.currentItem}
            estadosRepublica={this.props.estadosRepublica}
            allTipoEstablecimientos={this.props.allTipoEstablecimientos}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(EstablecimientoModal);
