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

        let formData = new FormData();
        formData.append('delivery', this.state.delivery);
        formData.append('establecimiento', this.state.establecimiento);
        formData.append('comentarios', this.state.comentarios);


    };

    render() {
        console.log("RENDERING FORM");
        return (
            <Form onSubmit={this.handleSubmit} className="wholeWidth" encType="multipart/form-data">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="delivery">Evidencia Delivery</Label>
                            <Input value={this.state.cleanName}
                                   type="file"
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
                            <Input value={this.state.cleanName}
                                   type="file"
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
                            <Input value={this.state.cleanName}
                                   type="text" name="comentarios"
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

const mapDispatchToProps = (dispath) => {
    return {
        CloseModal: () => {
            dispath(allActions.GenericAction.closeModal())
        },
        SetUnidades: (unidades) => {
            dispath(allActions.TiroAction.setUnidades(unidades));
        },
    }
};

export default connect(null, mapDispatchToProps)(withRouter(UploadEvidenciaForm));
