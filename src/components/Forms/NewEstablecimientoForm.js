import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import EstablecimientoHelper from '../../helpers/EstablecimientoHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class NewEstablecimientoForm extends Component {

  state = {
    nombreEstablecimiento: '',
    tipoEstablecimiento: '',
    direccion: '',
    colonia: '',
    cp: '',
    estado: '',
    municipio: '',
  };

  catalogHelper = new EstablecimientoHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log("Target Name", event.target.name);
    console.log("Target Value", event.target.value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const newEstablecimiento = {
      nombreEstablecimiento: this.state.nombreEstablecimiento,
      tipoEstablecimiento: this.state.tipoEstablecimiento,
      direccion: this.state.direccion,
      colonia: this.state.colonia,
      cp: this.state.cp,
      estado: this.state.estado,
      municipio: this.state.municipio,
    };

    //reseting form values
    this.setState({
      nombreEstablecimiento: '',
      tipoEstablecimiento: '',
      direccion: '',
      colonia: '',
      cp: '',
      estado: '',
      municipio: '',
    });

    console.log("newEstablecimiento Info ", newEstablecimiento);

    if(await this.catalogHelper.postEstablecimiento(newEstablecimiento) === true) {
      if (await this.catalogHelper.getEstablecimientos() === true) {
        this.props.SetAllEstablecimientos(this.catalogHelper.establecimientos);
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
              <Label for="Tipo">Tipo</Label>
              <Input value={this.state.tipoEstablecimiento} type="select" name="tipoEstablecimiento" onChange={this.handleChange}>
                <option key="120a">Seleccione una opción</option>
                {
                  this.props.allTipoEstablecimientos.map((item, idx) => (
                    <option key={idx}>{item.nombre}</option>
                  ))
                }
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input value={this.state.nombreEstablecimiento} type="text" name="nombreEstablecimiento" placeholder="Tepeyac, Benavides" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Direccion">Direccion</Label>
              <Input value={this.state.direccion} type="text" name="direccion" placeholder="Calle Numero Int y Ext" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Colonia">Colonia</Label>
              <Input value={this.state.colonia} type="text" name="colonia" placeholder="Alguna Colonia" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="CP">CP</Label>
              <Input value={this.state.cp} type="text" name="cp" placeholder="09878" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Estado">Estado</Label>
              <Input value={this.state.estado} type="select" name="estado" onChange={this.handleChange}>
                <option key="120b">Seleccione una opción</option>
                {
                  this.props.estadosRepublica.map((item, idx) => (
                    <option key={idx}>{item.nombre}</option>
                  ))
                }
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Municipio">Municipio</Label>
              <Input value={this.state.municipio} type="text" name="municipio" placeholder="Zapopan, GAM, La Escondida" onChange={this.handleChange}/>
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
    SetAllEstablecimientos: (allEstablecimientos)=> {dispath(allActions.EstablecimientoAction.setAllEstablecimientos(allEstablecimientos))},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NewEstablecimientoForm));
