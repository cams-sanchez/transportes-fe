import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import UnidadHelper from '../../helpers/UnidadHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class NewUnidadForm extends Component {

  state = {
    nombre:'',
    marca: '',
    tipo: '',
    tonelaje: '',
    mantenimientosRealizados: '',
    kilometraje: '',
    estatus: ''
  };

  helper = new UnidadHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const newUnidad = {
      nombre: this.state.nombre,
      marca: this.state.marca,
      tipo: this.state.tipo,
      tonelaje: this.state.tonelaje,
      mantenimientosRealizados: this.state.mantenimientosRealizados, //array
      kilometraje: this.state.kilometraje, //array
      estatus: this.state.estatus
    };

    console.log("Unidad TO Save", newUnidad);
    //reseting form values
    this.setState({
      nombre:'',
      marca: '',
      tipo: '',
      tonelaje: '',
      mantenimientosRealizados: '',
      kilometraje: '',
      estatus: ''
    });

    if(await this.helper.postUnidad(newUnidad) === true) {
      if (await this.helper.getUnidades() === true) {
        this.props.SetUnidades(this.helper.unidades);
      }
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit} className="wholeWidth">
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input value={this.state.nombre} type="text" name="nombre" placeholder="Basico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Marca">Marca</Label>
              <Input value={this.state.marca} type="text" name="marca" placeholder="Manto. básico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Tipo">Tipo</Label>
              <Input value={this.state.tipo} type="text" name="tipo" placeholder="Manto. básico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Tonelaje">Tonelaje</Label>
              <Input value={this.state.tonelaje} type="text" name="tonelaje" placeholder="Manto. básico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Kilometraje">Kilometraje</Label>
              <Input value={this.state.kilometraje} type="text" name="kilometraje" placeholder="10000" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Estatus">Estatus</Label>
              <Input type="select" name="estatus" onChange={this.handleChange}>
                <option>Opción</option>
                <option>En Espera</option>
                <option>En Ruta</option>
                <option>En Mantenimiento</option>
                <option>Baja</option>
              </Input>
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
              Guardar
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapDispatchToProps= (dispath) =>{
  return {
    SetUnidades: (unidades) => {dispath(allActions.UnidadAction.setUnidades(unidades));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NewUnidadForm));
