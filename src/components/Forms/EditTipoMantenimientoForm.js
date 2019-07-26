import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';
import TipoMantenimientoHelper from '../../helpers/TipoMantenimientoHelper';

class EditTipoMantenimientoForm extends Component {

  state = {
    _id:'',
    nombre:'',
    descripcion:'',
    kilometros:'',
    cambiosARealizar:'',
  };

  catalogHelper = new TipoMantenimientoHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const mantenimiento = {
      _id: this.props.currentItem._id,
      nombre:this.state.nombre !== '' ? this.state.nombre: this.props.currentItem.nombre,
      descripcion:this.state.descripcion !== '' ? this.state.descripcion: this.props.currentItem.descripcion,
      kilometros:this.state.kilometros !== '' ? this.state.kilometros: this.props.currentItem.kilometros,
      cambiosARealizar:this.state.cambiosARealizar !== '' ? this.state.nombre: this.props.currentItem.cambiosARealizar,
    };

    if(await this.catalogHelper.putTipoMantenimiento(mantenimiento) === true) {
      if (await this.catalogHelper.getTipoMantenimiento() === true) {
        this.props.SetMantenimientos(this.catalogHelper.tipoMantenimiento);
      }
      this.props.CloseModal();
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  handleDeleteSubmit = async (event) => {
    event.preventDefault();

    const mant = {
      _id: this.props.currentItem._id,
    };

    if(await this.catalogHelper.deleteTipoMantenimiento(mant) === true) {
      if (await this.catalogHelper.getTipoMantenimiento() === true) {
        this.props.SetMantenimientos(this.catalogHelper.tipoMantenimiento);
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
              <Input type="text" defaultValue={currentItem.nombre} name="nombre" placeholder="Basico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Nombre">Descripcion</Label>
              <Input type="text" defaultValue={currentItem.descripcion} name="descripcion" placeholder="Manto. básico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Nombre">Kilometros</Label>
              <Input type="text" defaultValue={currentItem.kilometros} name="kilometros" placeholder="10000" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Nombre">Cambios A Relizar</Label>
              <Input type="text" defaultValue={currentItem.cambiosARealizar} name="cambiosARealizar" placeholder="Aceite, bujias, filtro" onChange={this.handleChange}/>
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
    SetMantenimientos: (allMantenimientos) => {dispath(allActions.TipoMantenimientoAction.setMantenimientos(allMantenimientos));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(EditTipoMantenimientoForm));
