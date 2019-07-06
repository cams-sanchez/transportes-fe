import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import EditTipoDeCargaForm from '../Forms/EditTipoDeCargaForm';

class TipoDeCargaModal extends Component {

  state = {
    openModal: false,
    currentItem: {},
  };

  closeModal = () => {
    this.setState({
      openModal:false,
    });
  };

  componentWillReceiveProps (nextProps, nextContext) {
    this.setState({
      openModal:nextProps.openModal,
      currentItem:nextProps.currentItem
    });
  }

  testFunction () {
    console.log("TESTHING", this);
  }

  render () {

    const {currentItem, openModal} = this.state;
    return (
      <Modal isOpen={openModal}>
        <ModalHeader >Editar Tipo De Carga</ModalHeader>
        <ModalBody>
          <EditTipoDeCargaForm currentItem={currentItem} openModal={openModal} closeModal={this.closeModal}/>
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

export default TipoDeCargaModal;
