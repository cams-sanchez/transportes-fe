import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import TipoMantenimientoHelper from '../../helpers/TipoMantenimientoHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class NewTipoMantenimientoForm extends Component {

  state = {
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

    const newMant = {
      nombre:this.state.nombre,
      descripcion:this.state.descripcion,
      kilometros:this.state.kilometros,
      cambiosARealizar:this.state.cambiosARealizar,
    };

    //reseting form values
    this.setState({
      nombre:'',
      descripcion:'',
      kiolometros:'',
      cambiosARealizar:'',
    });

    if(await this.catalogHelper.postTipoMantenimiento(newMant) === true) {
      if (await this.catalogHelper.getTipoMantenimiento() === true) {
        this.props.SetMantenimientos(this.catalogHelper.tipoMantenimiento);
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
              <Label for="Nombre">Descripcion</Label>
              <Input value={this.state.descripcion} type="text" name="descripcion" placeholder="Manto. básico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Nombre">Kilometros</Label>
              <Input value={this.state.kilometros} type="text" name="kilometros" placeholder="10000" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Nombre">Cambios A Realizar</Label>
              <Input value={this.state.cambiosARealizar} type="text" name="cambiosARealizar" placeholder="Aceite, bujias, filtro" onChange={this.handleChange}/>
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
    SetMantenimientos: (allMantenimientos) => {dispath(allActions.TipoMantenimientoAction.setMantenimientos(allMantenimientos));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NewTipoMantenimientoForm));
