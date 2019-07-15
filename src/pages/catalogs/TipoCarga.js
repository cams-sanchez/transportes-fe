import Page from '../../components/Page';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { withRouter } from "react-router-dom";
import axios from 'axios/index';
import ApiEndPoints from '../../config/apiEndPoints';
import TipoDeCargaModal from '../../components/Modals/TipoDeCargaModal';
import NewTipoDeCargaForm from '../../components/Forms/NewTipoDeCargaForm';
import allActions from '../../redux/actions';

class TipoCarga extends Component{

  state = {
    tipoDeCarga: [],
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

  componentDidMount () {
    this.getInfoFromAp();
  }

  renderModal = (item) =>{
    this.props.OpenModal();
    this.props.SetCurrentItem(item);
  };

  render() {
    return (
      <Page
        title=""
        breadcrumbs={[{ name: 'catalogs/tipodecarga', active: true }]}
        className="CatalogsTipoDeCargaPage"
      >
        <TipoDeCargaModal currentItem={this.props.currentItem}/>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Nuevo Tipo de Carga</CardHeader>
              <CardBody >
              <Row>
                <NewTipoDeCargaForm/>
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

const mapStateToProps= (reduxState, ownProps) => {
  return {
    currentItem: reduxState.tipoDeCargaReducer.currentItem,
  }
};

const mapDispatchToProps= (dispath) =>{
  return {
    SetCurrentItem: (currentItem)=> {dispath(allActions.tipoDeCargaAction.setCurrentItem(currentItem))},
    OpenModal: ()=> {dispath(allActions.tipoDeCargaAction.openModal())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TipoCarga));
