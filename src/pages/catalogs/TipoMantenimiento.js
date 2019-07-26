import Page from '../../components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import NewTipoMantenimiento from '../../components/Forms/NewTipoMantenimientoForm';
import allActions from '../../redux/actions';
import TipoMantenimientoHelper from '../../helpers/TipoMantenimientoHelper';
import TipoMantenimientoModal from '../../components/Modals/TipoMantenimientoModal';

class TipoMantenimiento extends Component {

  helper = new TipoMantenimientoHelper();

  getData = async () => {
    await this.helper.getTipoMantenimiento();

    if (Array.isArray(this.helper.tipoMantenimiento)) {
      this.props.SetMantenimientos(this.helper.tipoMantenimiento);
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
        className="CatalogsTipoMantenimientoPage"
      >
        <TipoMantenimientoModal
          currentItem={this.props.currentItem}
        />

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Nuevo Tipo Mantenimiento</CardHeader>
              <CardBody>
                <Row>
                  <NewTipoMantenimiento/>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Tipo Mantenimiento</CardHeader>
              <CardBody>
                <div className="table-overflow">
                  <Table size="sm">
                    <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Descripcion</th>
                      <th>Kilometros</th>
                      <th>Cambios A Realizar</th>
                      <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.props.allMantenimientos.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.nombre}</td>
                          <td>{item.descripcion}</td>
                          <td>{item.kilometros}</td>
                          <td>{item.cambiosARealizar}</td>
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
    allMantenimientos: reduxState.TipoMantenimientoReducer.allMantenimientos,
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    SetCurrentItem: (currentItem) => {dispath(allActions.GenericAction.setCurrentItem(currentItem));},
    SetMantenimientos: (allMantenimientos) => {dispath(allActions.TipoMantenimientoAction.setMantenimientos(allMantenimientos));},
    OpenModal: () => {dispath(allActions.GenericAction.openModal());},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TipoMantenimiento));
