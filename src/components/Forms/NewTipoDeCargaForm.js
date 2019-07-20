import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import TiposDeCargaHelper from '../../helpers/TiposDeCargaHelper';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';

class NewTipoDeCargaForm extends Component {

  state = {
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

    const newTipoCarga = {
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

    if(await this.catalogHelper.postTipoDeCarga(newTipoCarga) === true) {
      if (await this.catalogHelper.getTiposDeCarga() === true) {
        this.props.SetAllTiposDeCarga(this.catalogHelper.tiposDeCarga);
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
              <Input value={this.state.nombre} type="text" name="nombre" placeholder="trailer, lote, etc." onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Unidad Métrica">Unidad Métrica</Label>
              <Input value={this.state.unidadMetrica} type="text" name="unidadMetrica" placeholder="pz, Kg, etc." onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input value={this.state.descripcion} type="text" name="descripcion" placeholder="caja con 80 pzas" onChange={this.handleChange}/>
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
    SetAllTiposDeCarga: (allTiposDeCarga)=> {dispath(allActions.TipoDeCargaAction.setAllTiposDeCarga(allTiposDeCarga))},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(NewTipoDeCargaForm));
