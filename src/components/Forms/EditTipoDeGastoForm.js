import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';
import TiposDeGastoHelper from '../../helpers/TiposDeGastoHelper';

class EditTipoDeGastoForm extends Component {

  state = {
    _id:'',
    nombre:'',
    descripcion:'',
  };

  catalogHelper = new TiposDeGastoHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const tipoGasto = {
      _id: this.props.currentItem._id,
      nombre:this.state.nombre,
      descripcion:this.state.descripcion
    };

    if(await this.catalogHelper.putTipoDeGasto(tipoGasto) === true) {
      if (await this.catalogHelper.getTiposDeGasto() === true) {
        this.props.SetAllTiposDeGasto(this.catalogHelper.tiposDeGasto);
      }
      this.props.CloseModal();
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  handleDeleteSubmit = async (event) => {
    event.preventDefault();

    const tipoGasto = {
      _id: this.props.currentItem._id,
    };

    console.log("Delete Event", tipoGasto);
    if(await this.catalogHelper.deleteTipoDeGasto(tipoGasto) === true) {
      if (await this.catalogHelper.getTiposDeGasto() === true) {
        this.props.SetAllTiposDeGasto(this.catalogHelper.tiposDeGasto);
      }
      this.props.CloseModal();
    } else if(this.catalogHelper.is401Redirect === true) {
      console.log("Redirectiong");
      this.props.history.push('/login');
    }
  };

  render() {
    let currentItem = {};

    if(this.props.currentItem) {
      currentItem = this.props.currentItem;
    }

    return (
      <Form onSubmit={this.handleSubmit} className="wholeWidth">
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input type="text" defaultValue={currentItem.nombre} name="nombre" placeholder="trailer, lote, etc." onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input type="text" defaultValue={currentItem.descripcion} name="descripcion" placeholder="caja con 80 pzas" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              size="lg"
              className="bg-gradient-theme-left border-0 centerButton"
              block
              onClick={this.handleSubmit}>
              Editar
            </Button>
          </Col>
          <Col>
            <Button
              size="lg"
              className="bg-gradient-theme-left border-0 centerButton"
              block
              onClick={this.handleDeleteSubmit}>
              Borrar
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapDispatchToProps= (dispath) =>{
  return {
    CloseModal: ()=>{dispath(allActions.GenericAction.closeModal())},
    SetAllTiposDeGasto: (allTiposDeGasto)=> {dispath(allActions.TipoDeGastoAction.setAllTiposDeGasto(allTiposDeGasto))},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(EditTipoDeGastoForm));
