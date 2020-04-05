import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import allActions from '../../redux/actions';
import { connect } from 'react-redux';
import TipoIncidenciaHelper from '../../helpers/TipoIncidenciaHelper';

class EditTipoIncidenciaForm extends Component {

  state = {
    _id:'',
    nombre:'',
    bloquealaRuta: false,
    descripcion:'',
  };

  catalogHelper = new TipoIncidenciaHelper();

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const mantenimiento = {
      _id: this.props.currentItem._id,
      nombre:this.state.nombre !== '' ? this.state.nombre: this.props.currentItem.nombre,
      bloquealaRuta:this.state.bloquealaRuta !== '' ? this.state.bloquealaRuta: this.props.currentItem.bloquealaRuta,
      descripcion:this.state.descripcion !== '' ? this.state.descripcion: this.props.currentItem.descripcion,
    };

    if(await this.catalogHelper.putTipoIncidencia(mantenimiento) === true) {
      if (await this.catalogHelper.getTipoIncidencia() === true) {
        this.props.SetIncidencias(this.catalogHelper.tipoIncidencia);
      }
      this.props.CloseModal();
    } else if(this.helper.is401Redirect === true) {
      this.props.history.push('/login');
    }
  };

  handleDeleteSubmit = async (event) => {
    event.preventDefault();

    const mant = {
      _id: this.props.currentItem._id,
    };

    if(await this.catalogHelper.deleteTipoIncidencia(mant) === true) {
      if (await this.catalogHelper.getTipoIncidencia() === true) {
        this.props.SetIncidencias(this.catalogHelper.tipoIncidencia);
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
              <Label for="Nombre">Nombre</Label>
              <Input type="text" defaultValue={currentItem.nombre} name="nombre" placeholder="Basico" onChange={this.handleChange}/>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Bloque La Ruta">Bloque La Ruta {currentItem.bloquealaRuta}</Label>
              <Input type="select" name="bloquealaRuta" onChange={this.handleChange}>
                <option key="120a" selected>{(currentItem.bloquealaRuta === true)? 'Si':'No'}</option>
                <option key="120c">No</option>
                <option key="120d">Si</option>
              </Input>

            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="Descripcion">Descripcion</Label>
              <Input type="text" defaultValue={currentItem.descripcion} name="descripcion" placeholder="Manto. básico" onChange={this.handleChange}/>
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
    SetIncidencias: (allIncidencias) => {dispath(allActions.TipoIncidenciaAction.setIncidencias(allIncidencias));},
  }
};

export default connect(null, mapDispatchToProps)(withRouter(EditTipoIncidenciaForm));
