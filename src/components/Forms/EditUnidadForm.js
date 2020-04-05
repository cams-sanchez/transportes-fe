import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';
import UnidadHelper from '../../helpers/UnidadHelper';

class EditUnidadForm extends Component {

  state = {
    _id:'',
    nombre:'',
    marca: '',
    tipo: '',
    tonelaje: '',
    mantenimientosRealizados: '',
    kilometraje: '',
    estatus: ''
  };

  catalogHelper = new UnidadHelper();

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
      marca:this.state.marca !== '' ? this.state.marca: this.props.currentItem.marca,
      tipo:this.state.tipo !== '' ? this.state.tipo: this.props.currentItem.tipo,
      tonelaje:this.state.tonelaje !== '' ? this.state.nombre: this.props.currentItem.tonelaje,
      mantenimientosRealizados:this.state.mantenimientosRealizados !== '' ? this.state.nombre: this.props.currentItem.mantenimientosRealizados,
      kilometraje:this.state.kilometraje !== '' ? this.state.kilometraje: this.props.currentItem.kilometraje,
      estatus:this.state.estatus !== '' ? this.state.estatus: this.props.currentItem.estatus,

    };

    if(await this.catalogHelper.putUnidad(mantenimiento) === true) {
      if (await this.catalogHelper.getUnidad() === true) {
        this.props.SetUnidades(this.catalogHelper.tipoMantenimiento);
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

    if(await this.catalogHelper.deleteUnidad(mant) === true) {
      if (await this.catalogHelper.getUnidad() === true) {
        this.props.SetUnidades(this.catalogHelper.tipoMantenimiento);
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
    SetUnidades: (unidades) => {dispath(allActions.UnidadAction.setUnidades(unidades));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(EditUnidadForm));
