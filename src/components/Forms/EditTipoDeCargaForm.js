import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';
import TiposDeCargaHelper from '../../helpers/TiposDeCargaHelper';

class EditTipoDeCargaForm extends Component {

  state = {
    _id:'',
    nombre:'',
    unidadMetrica:'',
    descripcion:'',
  };

  catalogHelper = new TiposDeCargaHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const tipoCarga = {
      _id: this.props.currentItem._id,
      nombre:this.state.nombre !=='' ? this.state.nombre : this.props.currentItem.nombre,
      unidadMetrica:this.state.unidadMetrica !=='' ? this.state.unidadMetrica : this.props.currentItem.unidadMetrica,
      descripcion:this.state.descripcion !=='' ? this.state.descripcion : this.props.currentItem.descripcion
    };

    if(await this.catalogHelper.putTipoDeCarga(tipoCarga) === true) {
      if (await this.catalogHelper.getTiposDeCarga() === true) {
        this.props.SetAllTiposDeCarga(this.catalogHelper.tiposDeCarga);
      }
      this.props.CloseModal();
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  handleDeleteSubmit = async (event) => {
    event.preventDefault();

    const tipoCarga = {
      _id: this.props.currentItem._id,
    };

    if(await this.catalogHelper.deleteTipoDeCarga(tipoCarga) === true) {
      if (await this.catalogHelper.getTiposDeCarga() === true) {
        this.props.SetAllTiposDeCarga(this.catalogHelper.tiposDeCarga);
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
          <Col>
            <FormGroup>
              <Label for="Unidad Métrica">Unidad Métrica</Label>
              <Input type="text" defaultValue={currentItem.unidadMetrica} name="unidadMetrica" placeholder="pz, Kg, etc." onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input type="text" defaultValue={currentItem.descripcion} name="descripcion" placeholder="caja con 80 pzas" onChange={this.handleChange}/>
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
    SetAllTiposDeCarga: (allTiposDeCarga)=> {dispath(allActions.TipoDeCargaAction.setAllTiposDeCarga(allTiposDeCarga))},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(EditTipoDeCargaForm));
