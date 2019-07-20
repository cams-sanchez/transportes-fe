import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';
import EstablecimientoHelper from '../../helpers/EstablecimientoHelper';

class EditEstablecimientoForm extends Component {

  state = {
    _id:'',
    nombreEstablecimiento: '',
    tipoEstablecimiento: '',
    direccion: '',
    colonia: '',
    cp: '',
    estado: '',
    municipio: '',
  };

  catalogHelper = new EstablecimientoHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const establecimiento = {
      _id: this.props.currentItem._id,

      nombreEstablecimiento: this.state.nombreEstablecimiento !=='' ?
        this.state.nombreEstablecimiento :
        this.props.currentItem.nombreEstablecimiento,

      tipoEstablecimiento: this.state.tipoEstablecimiento !=='' ?
        this.state.tipoEstablecimiento :
        this.props.currentItem.tipoEstablecimiento,

      direccion: this.state.direccion !=='' ?
        this.state.direccion :
        this.props.currentItem.direccion,

      colonia: this.state.colonia !=='' ?
        this.state.colonia :
        this.props.currentItem.colonia,

      cp: this.state.cp !=='' ?
        this.state.cp :
        this.props.currentItem.cp,

      estado: this.state.estado !=='' ?
        this.state.estado :
        this.props.currentItem.estado,

      municipio: this.state.municipio !=='' ?
        this.state.municipio :
        this.props.currentItem.municipio,
    };

    if(await this.catalogHelper.putEstablecimiento(establecimiento) === true) {
      if (await this.catalogHelper.getEstablecimientos() === true) {
        this.props.SetAllEstablecimientos(this.catalogHelper.establecimientos);
      }
      this.props.CloseModal();
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  handleDeleteSubmit = async (event) => {
    event.preventDefault();

    const establecimiento = {
      _id: this.props.currentItem._id,
    };

    console.log("Delete Event", establecimiento);
    if(await this.catalogHelper.deleteEstablecimiento(establecimiento) === true) {
      if (await this.catalogHelper.getEstablecimientos() === true) {
        this.props.SetAllEstablecimientos(this.catalogHelper.establecimientos);
      }
      this.props.CloseModal();
    } else if(this.catalogHelper.is401Redirect === true) {
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
              <Label for="Tipo">Tipo</Label>
              <Input type="select" name="tipoEstablecimiento" onChange={this.handleChange}>
                <option key="120a" value={currentItem.tipoEstablecimiento}>{currentItem.tipoEstablecimiento}</option>
                {
                  this.props.allTipoEstablecimientos.map((item, idx) => (
                    <option key={idx}>{item.nombre}</option>
                  ))
                }
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Nombre">Nombre</Label>
              <Input defaultValue={currentItem.nombreEstablecimiento} type="text" name="nombreEstablecimiento" placeholder="Tepeyac, Benavides" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>

        <Row form>
          <Col>
            <FormGroup>
              <Label for="Direccion">Dirección</Label>
              <Input defaultValue={currentItem.direccion} type="text" name="direccion" placeholder="Calle Numero Int y Ext" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Colonia">Colonia</Label>
              <Input defaultValue={currentItem.colonia} type="text" name="colonia" placeholder="Alguna Colonia" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="CP">CP</Label>
              <Input defaultValue={currentItem.cp} type="text" name="cp" placeholder="09878" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col>
            <FormGroup>
              <Label for="Estado">Estado</Label>
              <Input type="select" name="estado" onChange={this.handleChange}>
                <option key="120b" value={currentItem.estado}>{currentItem.estado}</option>
                {
                  this.props.estadosRepublica.map((item, idx) => (
                    <option key={idx}>{item.nombre}</option>
                  ))
                }
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Municipio">Municipio</Label>
              <Input defaultValue={currentItem.municipio} type="text" name="municipio" placeholder="Zapopan, GAM, La Escondida" onChange={this.handleChange}/>
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
    SetAllEstablecimientos: (allEstablecimientos)=> {dispath(allActions.EstablecimientoAction.setAllEstablecimientos(allEstablecimientos))},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(EditEstablecimientoForm));
