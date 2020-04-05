import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import TipoIncidenciaHelper from '../../helpers/TipoIncidenciaHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class NewTipoIncidenciaForm extends Component {

  state = {
    nombre:'',
    bloquealaRuta: 'No',
    descripcion:'',
  };

  catalogHelper = new TipoIncidenciaHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const newMant = {
      nombre:this.state.nombre,
      bloquealaRuta:this.state.bloquealaRuta,
      descripcion:this.state.descripcion,
    };

    //reseting form values
    this.setState({
      nombre:'',
      bloquealaRuta: 'No',
      descripcion:'',
    });

    if(await this.catalogHelper.postTipoIncidencia(newMant) === true) {
      if (await this.catalogHelper.getTipoIncidencia() === true) {
        this.props.SetIncidencias(this.catalogHelper.tipoIncidencia);
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
              <Input value={this.state.nombre} type="text" name="nombre" placeholder="Falla Mecánica" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <Label for="Bloque La Ruta">Bloque La Ruta</Label>
            <Input value={this.state.bloquealaRuta} type="select" name="bloquealaRuta" onChange={this.handleChange}>
              <option key="120c">No</option>
              <option key="120d">Si</option>
            </Input>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input value={this.state.descripcion} type="text" name="descripcion" placeholder="Falla mecánica desconida no arranca la unidad" onChange={this.handleChange}/>
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
    SetIncidencias: (allIncidencias) => {dispath(allActions.TipoIncidenciaAction.setIncidencias(allIncidencias));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NewTipoIncidenciaForm));
