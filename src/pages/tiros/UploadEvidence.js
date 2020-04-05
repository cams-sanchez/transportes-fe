import Page from '../../components/Page';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardBody, CardHeader, Col, Row, Table} from 'reactstrap';
import {withRouter} from "react-router-dom";
import allActions from '../../redux/actions';
import TirosHelper from '../../helpers/TirosHelper';
import TiroModal from "../../components/Modals/TiroModal";
import SearchTiroForm from "../../components/Forms/SearchTiroForm";

class UploadEvidence extends Component {

    helper = new TirosHelper();

    renderModal = (item) => {
        console.log("OPENING MODAL", item);
        this.props.OpenModal();
        this.props.SetCurrentItem(item);
    };

    render() {

        let tableImages = '';

        console.log("DELIVERY IMAGE", this.props.deliveryImg);
        if (this.props.deliveryImg) {
            tableImages =
                <div className="table-overflow">
                    <Table size="sm">
                       <thead>
                           <tr>
                               <th>Delivery</th>
                               <th>Establecimiento</th>
                           </tr>
                       </thead>
                       <tbody>
                           <tr>
                               <td>
                                   <img src={this.props.deliveryImg.foto_url} alt="delivery"/>
                               </td>
                               <td>
                                   <img src={this.props.establecimientoImg.foto_url} alt="establecimiento"/>
                               </td>
                           </tr>
                       </tbody>
                    </Table>
                </div>;
        }


        if (this.props.tiros[0]) {
            console.log("TIRpo", this.props.tiros[0].evidencias);
            tableImages =
                <div className="table-overflow">
                    <Table size="sm">
                        <thead>
                        <tr>
                            <th>Delivery</th>
                            <th>Establecimiento</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <img src={this.props.tiros[0].evidencias[1].foto_url} alt="delivery"/>
                            </td>
                            <td>
                                <img src={this.props.tiros[0].evidencias[0].foto_url} alt="estavlecimiento"/>
                            </td>
                        </tr>
                        </tbody>
                    </Table>
                </div>;
        }

        return (
            <Page
                title=""
                breadcrumbs={[{name: 'tiros', active: true}]}
                className="TirosPage"
            >
                <TiroModal currentItem={this.props.currentItem}/>

                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Subir Evidencias a Tiro</CardHeader>
                            <CardBody>
                                <Row>
                                    <SearchTiroForm/>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Card className="mb-3">
                            <CardHeader>Tiro Encontrado</CardHeader>
                            <CardBody>
                                <div className="table-overflow">
                                    <Table size="sm">
                                        <thead>
                                        <tr>
                                            <th>Ciudad</th>
                                            <th>Establecimiento</th>
                                            <th>Delivery</th>
                                            <th>Epv</th>
                                            <th>Jefe De Sector</th>
                                            <th>Estatus</th>
                                            <th>Acciones</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            this.props.tiros.map((item, idx) => (
                                                <tr key={idx}>
                                                    <td>{item.ciudad}</td>
                                                    <td>{item.establecimiento}</td>
                                                    <td>{item.delivery}</td>
                                                    <td>{item.epv}</td>
                                                    <td>{item.jefe_de_sector}</td>
                                                    <td>{item.status}</td>
                                                    <td>
                                                        <Button color="secondary"
                                                                onClick={() => this.renderModal(item)}>
                                                            Subir Evidencia
                                                        </Button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                        </tbody>
                                    </Table>
                                </div>

                                {tableImages}

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
        tiros: reduxState.TiroReducer.tiros,
        deliveryImg: reduxState.TiroReducer.deliveryImg,
        establecimientoImg: reduxState.TiroReducer.establecimientoImg,

    }
};

const mapDispatchToProps = (dispath) => {
    return {
        SetCurrentItem: (currentItem) => {
            dispath(allActions.GenericAction.setCurrentItem(currentItem))
        },
        SetTiros: (tiros) => {
            dispath(allActions.TiroAction.setTiros(tiros))
        },
        OpenModal: () => {
            dispath(allActions.GenericAction.openModal())
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UploadEvidence));
