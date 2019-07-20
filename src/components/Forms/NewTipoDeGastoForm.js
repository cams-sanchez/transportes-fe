import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import TiposDeGastoHelper from '../../helpers/TiposDeGastoHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class NewTipoDeGastoForm extends Component {

  state = {
    nombre:'',
    descripcion:'',
  };

  catalogHelper = new TiposDeGastoHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const newTipoGasto = {
      nombre:this.state.nombre,
      unidadMetrica:this.state.unidadMetrica,
      descripcion:this.state.descripcion
    };

    //reseting form values
    this.setState({
      nombre:'',
      unidadMetrica:'',
      descripcion:'',
    });

    console.log("newTipoGasto Info ", newTipoGasto);

    if(await this.catalogHelper.postTipoDeGasto(newTipoGasto) === true) {
      if (await this.catalogHelper.getTiposDeGasto() === true) {
        this.props.SetAllTiposDeGasto(this.catalogHelper.tiposDeGasto);
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
              <Input value={this.state.nombre} type="text" name="nombre" placeholder="viaticos, estancias, mecanico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input value={this.state.descripcion} type="text" name="descripcion" placeholder="gasto por algún concepto" onChange={this.handleChange}/>
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
    SetAllTiposDeGasto: (allTiposDeGasto)=> {dispath(allActions.TipoDeGastoAction.setAllTiposDeGasto(allTiposDeGasto))},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NewTipoDeGastoForm));
