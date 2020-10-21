import React, { Component } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import TirosHelper from "../../helpers/TirosHelper";

class UploadExcelForm extends Component {
  state = {
    excelFile: "",
    dropdownOpen: false,
    dropDownValue: 'Zona Republica',
  };

  helper = new TirosHelper();

  handleChange = (event) => {
    const propName = event.target.name;
    let propValue = event.target.value;

    if (propName === "excelFile") {
      propValue = event.target.files[0];
    }

    console.log('Prop Name', propName);
    console.log('Prop Value', propValue);

    this.setState({
      excelFile: propValue,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    console.log('Excel FIle ', this.state)
    formData.append("excelFile", this.state.excelFile);
    formData.append("zonaRepublica", this.state.zonaRepublica);

    if ((await this.helper.postUploadExcel(formData)) === true) {
      alert("Se subio correctamente");
    } else if (this.helper.is401Redirect === true) {
      this.props.history.push("/login");
    } else {
      alert("No se pudo subir el archivo");
    }
  };

  handleDropdownChange= (event) => {
    console.log('EVNET VALUEs ', event.target.innerText);
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
    return (
      <Form
        onSubmit={this.handleSubmit}
        className="wholeWidth"
        encType="multipart/form-data"
      >
        <FormGroup row>
          <Col sm={2} className="pt-3">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle className="bg-gradient-theme-left border-0" caret>
                {this.state.dropDownValue}
              </DropdownToggle>
              <DropdownMenu name="zonaRepublica">
                <DropdownItem name="Norte" value="Norte" onClick={this.handleDropdownChange}>Norte</DropdownItem>
                <DropdownItem name="Bajio" value="Bajio" onClick={this.handleDropdownChange}>Bajio</DropdownItem>
                <DropdownItem name="Sureste" value="Sureste" onClick={this.handleDropdownChange}>Sureste</DropdownItem>
                <DropdownItem name="Centro" value="Centro" onClick={this.handleDropdownChange}>Centro</DropdownItem>
                <DropdownItem name="Pacifico" value="Pacifico" onClick={this.handleDropdownChange}>Pacifico</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={2}>
            <Input
              type="file"
              name="excelFile"
              placeholder="Excel File"
              onChange={this.handleChange}
              accept=".xls, .xlsx"
            />
            <FormText color="muted">
              El excel Debe llevar las siguientes columnas: Ciudad Jefe de sector
              Delivery Nombre Region Fecha entrega solicitada Propuesta 361
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col sm={10}>
            <Button
              type="submit"
              size="lg"
              className="bg-gradient-theme-left border-0 centerButton"
              block
              onClick={this.handleSubmit}
            >
              Subir Excel
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  };
}

export default UploadExcelForm;
