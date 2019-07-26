import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import EstablecimientoHelper from '../../helpers/EstablecimientoHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class NewTipoEstablecimientoForm extends Component {

  state = {
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

    const newTipoEstab = {
      nombre:this.state.nombre,
    };

    //reseting form values
    this.setState({
      nombre:'',
    });

    if(await this.catalogHelper.postTipoEstablecimiento(newTipoEstab) === true) {
      if (await this.catalogHelper.getTipoEstablecimientos() === true) {
        this.props.SetAllTipoEstablecimientos(this.catalogHelper.tipoEstablecimientos);
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
              <Input value={this.state.nombre} type="text" name="nombre" placeholder="tienda, farmacia, bodega" onChange={this.handleChange}/>
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
    SetAllTipoEstablecimientos: (allTiposEstablecimientos) => {dispath(allActions.EstablecimientoAction.setTipoEstablecimientos(allTiposEstablecimientos));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NewTipoEstablecimientoForm));
