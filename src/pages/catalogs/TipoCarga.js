import Page from '../../components/Page';
import React, {Component} from 'react';
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Row, Table } from 'reactstrap';
import { withRouter } from "react-router-dom";
import axios from 'axios/index';
import ApiEndPoints from '../../config/apiEndPoints';
import TipoDeCargaModal from '../../components/Modals/TipoDeCargaModal';
import EditTipoDeCargaForm from '../../components/Forms/EditTipoDeCargaForm';
class TipoCarga extends Component{

  state = {
    tipoDeCarga: [],
    nombre:'',
    unidadMetrica:'',
    descripcion:'',
    openModal: false,
    currentItem:{},
  };

  apiCall = new ApiEndPoints();

  getInfoFromAp() {
    let apiCall = this.apiCall.getAllTiposDeCarga();
    let config = {
      headers: {
        'Authorization': 'Bearer ' + window.localStorage.getItem('jwt')
      }
    };
    axios.get(
      apiCall,
      config,
    ).then( response => {
      if(response.data.success === true) {
        this.setState({tipoDeCarga: response.data.data})
      }
      console.log(response.data);
    }).catch(error => {
      console.log('There was an error ', error);
      if(error.response.status === 401){
        console.log("UnAuthorized Token");
        this.props.history.push('/login');
      }
    })
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  handleSubmit = event => {
    event.preventDefault();

    const newTipoCarga = {
      nombre:this.state.nombre,
      unidadMetrica:this.state.unidadMetrica,
      descripcion:this.state.descripcion
    };
    console.log("newTipoCarga Info ", newTipoCarga);
    let urlApi = this.apiCall.setNewTipoCarga();

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
      });
  };

  componentDidMount () {
    this.getInfoFromAp();
  }

  renderModal = (item) =>{
    this.setState({
      openModal:true,
      currentItem:item,
    });
  };

  render() {

    const {currentItem:item, openModal} = this.state;
    return (
      <Page
        title=""
        breadcrumbs={[{ name: 'catalogs/tipodecarga', active: true }]}
        className="CatalogsTipoDeCargaPage"
      >
        <TipoDeCargaModal currentItem={item} openModal = {openModal}/>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Nuevo Tipo de Carga</CardHeader>
              <CardBody >
              <Row>
                <Form onSubmit={this.handleSubmit} className="wholeWidth">
                  <Row form>
                    <Col>
                      <FormGroup>
                        <Label for="Nombre">Nombre</Label>
                        <Input type="text" name="nombre" placeholder="trailer, lote, etc." onChange={this.handleChange} />
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
                        onClick={this.handleSubmit}>
                        Guardar
                      </Button>
                    </Col>
                  </Row>
                </Form>
                <EditTipoDeCargaForm/>
              </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Tipos de Carga</CardHeader>
              <CardBody>
                <Table size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Unidad Métrica</th>
                    <th>Descripción</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.state.tipoDeCarga.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item._id}</th>
                        <td>{item.nombre}</td>
                        <td>{item.unidadMetrica}</td>
                        <td>{item.descripcion}</td>
                        <td><Button color="secondary" onClick={()=>this.renderModal(item)}>Editar</Button></td>
                      </tr>
                    ))
                  }
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }

}

export default withRouter(TipoCarga);
