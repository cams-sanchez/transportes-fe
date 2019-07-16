import React, {Component} from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import ApiEndPoints from '../../config/apiEndPoints';
//import axios from 'axios';
import CatalogHelper from '../../helpers/AxiosHelper';


class NewTipoDeCargaForm extends Component {

  state = {
    nombre:'',
    unidadMetrica:'',
    descripcion:'',
  };

  //apiCall = new ApiEndPoints();
  catalogHelper = new CatalogHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();

    const newTipoCarga = {
      nombre:this.state.nombre,
      unidadMetrica:this.state.unidadMetrica,
      descripcion:this.state.descripcion
    };
    console.log("newTipoCarga Info ", newTipoCarga);

    let successExecution = this.catalogHelper.postTipoDeCarga(newTipoCarga);

    if(successExecution === true) {
      this.catalogHelper.getTiposDeCarga();
    }

    /*let urlApi = this.apiCall.setNewTipoCarga();

    let config = {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('jwt')
      }
    };

    axios.post(
      urlApi,
      newTipoCarga,
      config
    ).then(res => {
      const response = res.data;
      if(response.success === true) {
        console.log("We Saved this");
        this.getInfoFromAp();
      }
    });*/
  };


  render() {

    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="wholeWidth">
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input type="text" name="nombre" placeholder="trailer, lote, etc." onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Unidad Métrica">Unidad Métrica</Label>
              <Input type="text" name="unidadMetrica" placeholder="pz, Kg, etc." onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input type="text" name="descripcion" placeholder="caja con 80 pzas" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              size="lg"
              className="bg-gradient-theme-left border-0 centerButton"
              block
              onClick={this.handleSubmit.bind(this)}>
              Guardar
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default NewTipoDeCargaForm
