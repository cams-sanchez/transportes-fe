import Page from '../../components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import TipoEstablecimientoModal from '../../components/Modals/TipoEstablecimientoModal';
import NewTipoEstablecimientoForm from '../../components/Forms/NewTipoEstablecimientoForm';
import allActions from '../../redux/actions';
import EstablecimientoHelper from '../../helpers/EstablecimientoHelper';

class TipoEstablecimiento extends Component {

  helper = new EstablecimientoHelper();

  getData = async () => {
    await this.helper.getTipoEstablecimientos();

    if (Array.isArray(this.helper.tipoEstablecimientos)) {
      this.props.SetAllTipoEstablecimientos(this.helper.tipoEstablecimientos);
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
        breadcrumbs={[{ name: 'catalogs/tipoestablecimiento', active: true }]}
        className="CatalogsTipoEstablecimientoPage"
      >
        <TipoEstablecimientoModal
          currentItem={this.props.currentItem}
        />

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Nuevo Tipo Establecimiento</CardHeader>
              <CardBody>
                <Row>
                  <NewTipoEstablecimientoForm/>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Tipo Establecimiento</CardHeader>
              <CardBody>
                <div className="table-overflow">
                  <Table size="sm">
                    <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.props.allTipoEstablecimientos.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item._id}</td>
                          <td>{item.nombre}</td>
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
    allTipoEstablecimientos: reduxState.EstablecimientoReducer.allTipoEstablecimientos
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    SetCurrentItem: (currentItem) => {dispath(allActions.GenericAction.setCurrentItem(currentItem));},
    SetAllTipoEstablecimientos: (allTiposEstablecimientos) => {dispath(allActions.EstablecimientoAction.setTipoEstablecimientos(allTiposEstablecimientos));},
    OpenModal: () => {dispath(allActions.GenericAction.openModal());},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TipoEstablecimiento));
