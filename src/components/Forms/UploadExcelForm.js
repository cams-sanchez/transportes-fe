import React, {Component} from 'react';
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import TirosHelper from "../../helpers/TirosHelper";

class UploadExcelForm extends Component {

    state = {
        excelFile: '',
        cleanName: '',
    };

    helper = new TirosHelper();

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.files[0],
            'cleanName': event.target.value
        });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        let formData = new FormData();
        formData.append('excelFile', this.state.excelFile)

        //reseting form values
        this.setState({
            cleanName: '',
        });

        if (await this.helper.postUploadExcel(formData) === true) {
            alert("Se subio correctamente");
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
                            <Label for="Nombre">Archivo Excel</Label>
                            <Input value={this.state.cleanName} type="file" name="excelFile" placeholder="Excel File"
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
                            Subir Excel
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default UploadExcelForm;
