import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';
import EstablecimientoHelper from '../../helpers/EstablecimientoHelper';

class EditTipoEstablecimientoForm extends Component {

  state = {
    _id:'',
    nombre:'',
  };

  catalogHelper = new EstablecimientoHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const tipoEstab = {
      _id: this.props.currentItem._id,
      nombre:this.state.nombre !== '' ? this.state.nombre: this.props.currentItem.nombre,
    };

    if(await this.catalogHelper.putTipoEstablecimiento(tipoEstab) === true) {
      if (await this.catalogHelper.getTipoEstablecimientos() === true) {
        this.props.SetAllTipoEstablecimientos(this.catalogHelper.tipoEstablecimientos);
      }
      this.props.CloseModal();
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  handleDeleteSubmit = async (event) => {
    event.preventDefault();

    const tipoEstab = {
      _id: this.props.currentItem._id,
    };

    if(await this.catalogHelper.deleteTipoEstablecimiento(tipoEstab) === true) {
      if (await this.catalogHelper.getTipoEstablecimientos() === true) {
        this.props.SetAllTipoEstablecimientos(this.catalogHelper.tipoEstablecimientos);
      }
      this.props.CloseModal();
    } else if(this.catalogHelper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  render() {
    let currentItem = {};

    if(this.props.currentItem) {
      currentItem = this.props.currentItem;
    }

    return (
      <Form onSubmit={this.handleSubmit} className="wholeWidth">
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input type="text" defaultValue={currentItem.nombre} name="nombre" placeholder="trailer, lote, etc." onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-theme-left border-0 centerButton"
              block
              onClick={this.handleSubmit}>
              Editar
            </Button>
          </Col>
          <Col>
            <Button
              size="lg"
              className="bg-gradient-theme-left border-0 centerButton"
              block
              onClick={this.handleDeleteSubmit}>
              Borrar
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapDispatchToProps= (dispath) =>{
  return {
    CloseModal: ()=>{dispath(allActions.GenericAction.closeModal())},
    SetAllTipoEstablecimientos: (allTiposEstablecimientos) => {dispath(allActions.EstablecimientoAction.setTipoEstablecimientos(allTiposEstablecimientos));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(EditTipoEstablecimientoForm));
