import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Label,
  Row,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import allActions from "../../redux/actions";
import { connect } from "react-redux";
import DashboardHelper from "../../helpers/DashboardHelper";

class AvancesSeleccionTren extends Component {
  state = {
    trenes: {},
    tiros: {},
    dropdownOpen: false,
    dropDownValue: "Trenes Activos",
  };

  infoHelper = new DashboardHelper();

  async componentDidMount() {
    const trenes = await this.infoHelper.getDashboardActiveTrenes();
    this.setState({ trenes });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleDropdownChange = (event) => {
    console.log("EVNET VALUEs ", event.target.innerText);
    const propValue = event.target.innerText;

    this.setState({
      zonaRepublica: propValue,
      dropDownValue: propValue,
    });
  };

  toggle = () => {
    this.setState({ dropdownOpen: this.state.dropdownOpen ? false : true });
  };

  render() {
    let currentItem = {};

    if (this.props.currentItem) {
      currentItem = this.props.currentItem;
    }

    return (
      <Form onSubmit={this.handleSubmit} className="wholeWidth">
        <Row form>
          <Col className="col-xs-6 col-xl-6 col-lg-6">
            <FormGroup>
              <Label for="Nombre">Selecciona un tren</Label>
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle className="bg-gradient-theme-left border-0" caret>
                  {this.state.dropDownValue}
                </DropdownToggle>
                <DropdownMenu name="trenesActivos">
                  <DropdownItem
                    name="Norte"
                    value="Norte"
                    onClick={this.handleDropdownChange}
                  >
                    Norte
                  </DropdownItem>
                  <DropdownItem
                    name="Bajio"
                    value="Bajio"
                    onClick={this.handleDropdownChange}
                  >
                    Bajio
                  </DropdownItem>
                  <DropdownItem
                    name="Sureste"
                    value="Sureste"
                    onClick={this.handleDropdownChange}
                  >
                    Sureste
                  </DropdownItem>
                  <DropdownItem
                    name="Centro"
                    value="Centro"
                    onClick={this.handleDropdownChange}
                  >
                    Centro
                  </DropdownItem>
                  <DropdownItem
                    name="Pacifico"
                    value="Pacifico"
                    onClick={this.handleDropdownChange}
                  >
                    Pacifico
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              type="submit"
              size="xl"
              className="bg-gradient-theme-left border-0 centerButton"
              block
              onClick={this.handleSubmit}
            >
              Buscar Info Del Tren
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
      dispath(allActions.GenericAction.closeModal());
    },
    SetUnidades: (unidades) => {
      dispath(allActions.UnidadAction.setUnidades(unidades));
    },
  };
};

export default connect(null, mapDispatchToProps)(withRouter(AvancesSeleccionTren));
