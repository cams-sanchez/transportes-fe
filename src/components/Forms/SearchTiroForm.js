import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {Button, Col, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import allActions from '../../redux/actions';
import {connect} from 'react-redux';
import TirosHelper from "../../helpers/TirosHelper";

class SearchTiroForm extends Component {

    state = {
        deliveryNumber: '',
    };

    helper = new TirosHelper();

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

        /*     if (event.target.name === 'delivery') {
                 this.setState({
                     [event.target.name]: event.target.files[0],
                     'cleanValueDelivery': event.target.value
                 });
             }

             if (event.target.name === 'establecimiento') {
                 this.setState({
                     [event.target.name]: event.target.files[0],
                     'cleanValueEstablecimiento': event.target.value
                 });
             }*/
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const tiroToFind = {
            deliveryNumber: this.state.deliveryNumber,
        };

        //reseting form values
        this.setState({
            deliveryNumber: '',
        });

        if (await this.helper.getTiroByDelivery(tiroToFind) === true) {
            this.props.SetTiros(this.helper.tiros);
        } else if (this.helper.is401Redirect === true) {
            this.props.history.push('/login');
        }
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit} className="wholeWidth">
                <Row form>
                    <Col>
                        <FormGroup>
                            <Label for="Nombre">Numero De Delivery</Label>
                            <Input value={this.state.deliveryNumber} type="text" name="deliveryNumber" placeholder="Numero De Delivery"
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
                            Buscar Tiro
                        </Button>
                    </Col>
                </Row>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispath) => {
    return {
        SetTiros: (tiros) => {
            dispath(allActions.TiroAction.setTiros(tiros));
        },
    }
};

export default connect(null, mapDispatchToProps)(withRouter(SearchTiroForm));
