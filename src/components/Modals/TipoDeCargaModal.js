import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditTipoDeCargaForm from '../Forms/EditTipoDeCargaForm';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class TipoDeCargaModal extends Component {

  closeModal = () => {
    this.props.CloseModal();
  };

  testFunction () {
    console.log("TESTHING", this);
  }

  render () {
    console.log("IN MODAL", this.props.currentItem);
    return (
      <Modal isOpen={this.props.modalIsOpen}>
        <ModalHeader >Editar Tipo De Carga</ModalHeader>
        <ModalBody>
          <EditTipoDeCargaForm currentItem={this.props.currentItem} />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.closeModal}>Cerrar</Button>
          {/*<Button color="secondary" onClick={function(){
            console.log("Dentro De funcion", this);
            this.testFunction(); //the () maks the difference, of the this cause it is asking to execute right away so
            //the calling object is Button not the main component
          }.bind(this)}>Cancel</Button>*/}
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps= (reduxState, ownProps) => {
  return {
    modalIsOpen: reduxState.tipoDeCargaReducer.modalIsOpen,
  }
};

const mapDispatchToProps= (dispath) =>{
  return {
    CloseModal: ()=>{dispath(allActions.tipoDeCargaAction.closeModal())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TipoDeCargaModal);
