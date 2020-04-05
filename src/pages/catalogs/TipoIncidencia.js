import Page from '../../components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import NewTipoIncidencia from '../../components/Forms/NewTipoIncidenciaForm';
import allActions from '../../redux/actions';
import TipoIncidenciaHelper from '../../helpers/TipoIncidenciaHelper';
import TipoIncidenciaModal from '../../components/Modals/TipoIncidenciaModal';

class TipoIncidencia extends Component {

  helper = new TipoIncidenciaHelper();

  getData = async () => {
    await this.helper.getTipoIncidencia();

    if (Array.isArray(this.helper.tipoIncidencia)) {
      this.props.SetIncidencias(this.helper.tipoIncidencia);
    } else if (this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  componentDidMount () {
    this.getData();
  }

  renderModal = (item) => {
    this.props.OpenModal();
    this.props.SetCurrentItem(item);
  };

  render () {
    return (
      <Page
        title=""
        breadcrumbs={[{ name: 'catalogs/tipomantenimiento', active: true }]}
        className="CatalogsTipoIncidenciaPage"
      >
        <TipoIncidenciaModal
          currentItem={this.props.currentItem}
        />

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Nuevo Tipo Incidencia</CardHeader>
              <CardBody>
                <Row>
                  <NewTipoIncidencia/>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Tipo Incidencia</CardHeader>
              <CardBody>
                <div className="table-overflow">
                  <Table size="sm">
                    <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Bloqua La Ruta</th>
                      <th>Descripcion</th>
                      <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.props.allIncidencias.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.nombre}</td>
                          <td>{(item.bloquealaRuta === true)? 'Si':'No'}</td>
                          <td>{item.descripcion}</td>
                          <td><Button color="secondary" onClick={() => this.renderModal(item)}>Editar</Button></td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

const mapStateToProps = (reduxState, ownProps) => {
  return {
    currentItem: reduxState.GenericReducer.currentItem,
    allIncidencias: reduxState.TipoIncidenciaReducer.allIncidencias,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    SetCurrentItem: (currentItem) => {dispath(allActions.GenericAction.setCurrentItem(currentItem));},
    SetIncidencias: (allIncidencias) => {dispath(allActions.TipoIncidenciaAction.setIncidencias(allIncidencias));},
    OpenModal: () => {dispath(allActions.GenericAction.openModal());},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TipoIncidencia));
