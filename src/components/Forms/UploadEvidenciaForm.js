import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import allActions from '../../redux/actions';
import {connect} from 'react-redux';
import TirosHelper from "../../helpers/TirosHelper";

class UploadEvidenciaForm extends Component {

    state = {
        id: '',
        delivery: '',
        establecimiento: '',
        comentarios: '',
        latitude: '',
        longitude: '',
        cleanName: '',
    };

    helper = new TirosHelper();

    componentDidMount = () => {
        console.log("GEO LOCATION ", this.props);
        navigator.geolocation.getCurrentPosition(this.currentPosition);
    }

    currentPosition = (position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;

        console.log(`longitude: ${lng} | latitude: ${lat}`);

        this.setState({
            'latitude': lat,
            'longitude': lng,
            'id': this.props.currentItem.id
        });
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleChangeImages = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0],
            'cleanName': event.target.value
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let formEvidencias = new FormData();
        formEvidencias.append('id', this.state.id);
        formEvidencias.append('delivery', this.state.delivery);
        formEvidencias.append('establecimiento', this.state.establecimiento);
        formEvidencias.append('comentarios', this.state.comentarios);
        formEvidencias.append('latitude', this.state.latitude);
        formEvidencias.append('longitude', this.state.longitude);

        for (var value of formEvidencias.values()) {
            console.log("FORM DATA VALUE", value);
        }

        this.setState({
            cleanName: '',
        });

        if (await this.helper.postUploadEvidencias(formEvidencias) === true) {
            console.log("TIRO RETURNED BY SERVER", this.helper.tiros);
            this.props.SetTiros(this.helper.tiros);
            this.props.SetEstablecimiento(this.helper.tiros[0].evidencias[0]);
            this.props.SetDelivery(this.helper.tiros[0].evidencias[1]);

            alert("Se subio correctamente");
            this.props.CloseModal();
        } else if (this.helper.is401Redirect === true) {
            this.props.history.push('/login');
        } else {
            alert("No se pudo subir el archivo");
        }

    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="wholeWidth" encType="multipart/form-data">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="delivery">Evidencia Delivery</Label>
                            <Input type="file"
                                   name="delivery"
                                   placeholder="Foto De La Hoja Delivery"
                                   onChange={this.handleChangeImages}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="establecimiento">Evidencia Establecimiento</Label>
                            <Input type="file"
                                   name="establecimiento"
                                   placeholder="Foto De La Carga En El Establecimiento"
                                   onChange={this.handleChangeImages}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="comentarios">Comentarios</Label>
                            <Input type="text" name="comentarios"
                                   placeholder="Comentarios"
                                   onChange={this.handleChange}/>
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button
                            type="submit"
                            size="lg"
                            className="bg-gradient-theme-left border-0 centerButton"
                            block
                            onClick={this.handleSubmit}>
                            Guardar
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const mapStateToProps = (reduxState, ownProps) => {
    return {
        tiros: reduxState.TiroReducer.tiros
    }
};

const mapDispatchToProps = (dispath) => {
    return {
        CloseModal: () => {
            dispath(allActions.GenericAction.closeModal())
        },
        SetTiros: (tiros) => {
            dispath(allActions.TiroAction.setTiros(tiros))
        },
        SetDelivery: (delivery) => {
            dispath(allActions.TiroAction.setDelivery(delivery))
        },
        SetEstablecimiento: (establecimiento) => {
            dispath(allActions.TiroAction.setEstablecimiento(establecimiento))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UploadEvidenciaForm));
