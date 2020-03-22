import Page from '../../components/Page';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import { withRouter } from "react-router-dom";
import UnidadModal from '../../components/Modals/UnidadModal';
import NewUnidadForm from '../../components/Forms/CreateUnidadForm';
import allActions from '../../redux/actions';
import TirosHelper from '../../helpers/TirosHelper';

class DisplayTiros extends Component{

  helper = new TirosHelper();

  getData = async () => {
    await this.helper.getTiros();
    if (Array.isArray(this.helper.tiros)) {
      console.log("Found ", this.helper.tiros);
      this.props.SetTiros(this.helper.tiros);
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
        breadcrumbs={[{ name: 'tiros/crear', active: true }]}
        className="TirosCrearPage"
      >
        <UnidadModal currentItem={this.props.currentItem}/>

        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Subir Foto a Tiro</CardHeader>
              <CardBody >
              <Row>+
                {/*<NewUnidadForm/>*/}
              </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>

       {/* <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Unidades</CardHeader>
              <CardBody>
                <div className="table-overflow">
                  <Table size="sm">
                    <thead>
                    <tr>
                      <th>Nombre</th>
                      <th>Marca</th>
                      <th>Tipo</th>
                      <th>Tonelaje</th>
                      <th>Estatus</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                      this.props.tiros.map((item, idx) => (
                        <tr key={idx}>
                          <td>{item.nombre}</td>
                          <td>{item.marca}</td>
                          <td>{item.tipo}</td>
                          <td>{item.tonelaje}</td>
                          <td>{item.estatus}</td>
                          <td><Button color="secondary" onClick={()=>this.renderModal(item)}>Editar</Button></td>
                        </tr>
                      ))
                    }
                    </tbody>
                  </Table>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>*/}
      </Page>
    );
  }
}

const mapStateToProps= (reduxState, ownProps) => {
  return {
    currentItem: reduxState.GenericReducer.currentItem,
    tiros: reduxState.TiroReducer.tiros
  }
};

const mapDispatchToProps= (dispath) =>{
  return {
    SetCurrentItem: (currentItem)=> {dispath(allActions.GenericAction.setCurrentItem(currentItem))},
    SetTiros: (tiros)=> {dispath(allActions.TiroAction.setTiros(tiros))},
    OpenModal: ()=> {dispath(allActions.GenericAction.openModal())},
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DisplayTiros));
