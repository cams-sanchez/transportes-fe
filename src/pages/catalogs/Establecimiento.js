import Page from '../../components/Page';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import EstablecimientoModal from '../../components/Modals/EstablecimientoModal';
import NewEstablecimientoForm from '../../components/Forms/NewEstablecimientoForm';
import allActions from '../../redux/actions';
import EstablecimientoHelper from '../../helpers/EstablecimientoHelper';
import AxiosHelper from '../../helpers/AxiosHelper';

class Establecimiento extends Component {

  helper = new EstablecimientoHelper();
  estadosRepublicaHelper = new AxiosHelper();

  getData = async () => {
    await this.helper.getEstablecimientos();
    await this.estadosRepublicaHelper.getEstadosRepublica();
    await this.helper.getTipoEstablecimientos();

    if (Array.isArray(this.estadosRepublicaHelper.estadosRepublica)) {
      this.props.SetEstadosRepublica(this.estadosRepublicaHelper.estadosRepublica);
    }

    if (Array.isArray(this.helper.tipoEstablecimientos)) {
      this.props.SetAllTipoEstablecimientos(this.helper.tipoEstablecimientos);
    }

    if (Array.isArray(this.helper.establecimientos)) {
      this.props.SetAllEstablecimientos(this.helper.establecimientos);
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
        breadcrumbs={[{ name: 'catalogs/establecimiento', active: true }]}
        className="CatalogsEstablecimientoPage"
      >
        <EstablecimientoModal
          currentItem={this.props.currentItem}
          estadosRepublica={this.props.estadosRepublica}
          allTipoEstablecimientos={this.props.allTipoEstablecimientos}
        />

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Nuevo Establecimiento</CardHeader>
              <CardBody>
                <Row>
                  <NewEstablecimientoForm
                    estadosRepublica={this.props.estadosRepublica}
                    allTipoEstablecimientos={this.props.allTipoEstablecimientos}
                  />
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
                <div className="table-overflow">
                  <Table size="sm">
                    <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Nombre</th>
                      <th>Direccion</th>
                      <th>Colonia</th>
                      <th>CP</th>
                      <th>Estado</th>
                      <th>Municipio</th>
                      <th>Opciones</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.props.allEstablecimientos.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.tipoEstablecimiento}</td>
                          <td>{item.nombreEstablecimiento}</td>
                          <td>{item.direccion}</td>
                          <td>{item.colonia}</td>
                          <td>{item.cp}</td>
                          <td>{item.estado}</td>
                          <td>{item.municipio}</td>
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
    estadosRepublica: reduxState.GenericReducer.estadosRepublica,
    allEstablecimientos: reduxState.EstablecimientoReducer.allEstablecimientos,
    allTipoEstablecimientos: reduxState.EstablecimientoReducer.allTipoEstablecimientos
  };
};

const mapDispatchToProps = (dispath) => {
  return {
    SetCurrentItem: (currentItem) => {dispath(allActions.GenericAction.setCurrentItem(currentItem));},
    SetEstadosRepublica: (estadosRepublica) => {dispath(allActions.GenericAction.setEstadosRepublica(estadosRepublica));},
    SetAllEstablecimientos: (allEstablecimientos) => {dispath(allActions.EstablecimientoAction.setAllEstablecimientos(allEstablecimientos));},
    SetAllTipoEstablecimientos: (allTiposEstablecimientos) => {dispath(allActions.EstablecimientoAction.setTipoEstablecimientos(allTiposEstablecimientos));},
    OpenModal: () => {dispath(allActions.GenericAction.openModal());},
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Establecimiento));
