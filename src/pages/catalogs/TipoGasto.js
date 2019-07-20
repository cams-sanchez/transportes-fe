import Page from '../../components/Page';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { withRouter } from "react-router-dom";
import TipoDeGastoModal from '../../components/Modals/TipoDeGastoModal';
import NewTipoDeGastoForm from '../../components/Forms/NewTipoDeGastoForm';
import allActions from '../../redux/actions';
import TiposDeGastoHelper from '../../helpers/TiposDeGastoHelper';

class TipoGasto extends Component{

  helper = new TiposDeGastoHelper();

  getData = async () => {
    await this.helper.getTiposDeGasto();
    if (Array.isArray(this.helper.tiposDeGasto)) {
      this.props.SetAllTiposDeGasto(this.helper.tiposDeGasto);
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  componentDidMount () {
    this.getData();
  }

  renderModal = (item) =>{
    this.props.OpenModal();
    this.props.SetCurrentItem(item);
  };

  render() {
    return (
      <Page
        title=""
        breadcrumbs={[{ name: 'catalogs/tipodegasto', active: true }]}
        className="CatalogsTipoDeGastoPage"
      >
        <TipoDeGastoModal currentItem={this.props.currentItem}/>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Nuevo Tipo de Gasto</CardHeader>
              <CardBody >
              <Row>
                <NewTipoDeGastoForm/>
              </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Tipos de Gasto</CardHeader>
              <CardBody>
                <Table size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                  </tr>
                  </thead>
                  <tbody>
                  {
                    this.props.allTiposDeGasto.map((item, idx) => (
                      <tr key={idx}>
                        <th scope="row">{item._id}</th>
                        <td>{item.nombre}</td>
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
    currentItem: reduxState.GenericReducer.currentItem,
    allTiposDeGasto: reduxState.TipoDeGastoReducer.allTiposDeGasto
  }
};

const mapDispatchToProps= (dispath) =>{
  return {
    SetCurrentItem: (currentItem)=> {dispath(allActions.GenericAction.setCurrentItem(currentItem))},
    SetAllTiposDeGasto: (allTiposDeGasto)=> {dispath(allActions.TipoDeGastoAction.setAllTiposDeGasto(allTiposDeGasto))},
    OpenModal: ()=> {dispath(allActions.GenericAction.openModal())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TipoGasto));
