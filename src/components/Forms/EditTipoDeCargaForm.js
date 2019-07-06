import React, {Component} from 'react';
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import ApiEndPoints from '../../config/apiEndPoints';
import axios from 'axios';
class EditTipoDeCargaForm extends Component {

  state = {
    _id:'',
    nombre:'',
    unidadMetrica:'',
    descripcion:'',
  };

  apiCall = new ApiEndPoints();

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  handleSubmit = event => {
    event.preventDefault();

    const tipoCarga = {
      _id: this.props.currentItem._id,
      nombre:this.nombre,
      unidadMetrica:this.unidadMetrica,
      descripcion:this.descripcion
    };
    console.log("tipoCarga Info ", tipoCarga);
    let urlApi = this.apiCall.setNewTipoCarga();

    let config = {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('jwt')
      }
    };

    axios.put(
      urlApi,
      tipoCarga,
      config
    ).then(res => {
      const response = res.data;
      if(response.success === true) {
        console.log("We Saved this");
        this.props.closeModal();
      }
    });
  };

  render() {

    let currentItem = {};
    if(this.props.currentItem) {
      currentItem = this.props.currentItem;
    }
    console.log("FORM",currentItem);
    return (
      <Form onSubmit={this.handleSubmit.bind(this)} className="wholeWidth">
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input type="text" value={currentItem.nombre} name="nombre" placeholder="trailer, lote, etc."/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Unidad Métrica">Unidad Métrica</Label>
              <Input type="text" value={currentItem.unidadMetrica} name="unidadMetrica" placeholder="pz, Kg, etc."/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input type="text" value={currentItem.descripcion} name="descripcion" placeholder="caja con 80 pzas"/>
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

export default EditTipoDeCargaForm
