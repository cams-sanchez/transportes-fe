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
    cleanName: "",
    dropdownOpen: false,
  };

  helper = new TirosHelper();

  handleChange = (event) => {
    const propName = event.target.name;
    let propValue = event.target.value;

    if (propName === "excelFile") {
      propValue = event.target.files[0];
    }

    this.setState({
      propName: propValue,
      cleanName: propValue,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("excelFile", this.state.excelFile);
    formData.append("zonaRepublica", this.state.zonaRepublica);

    //reseting form values
    this.setState({
      cleanName: "",
    });

    if ((await this.helper.postUploadExcel(formData)) === true) {
      alert("Se subio correctamente");
    } else if (this.helper.is401Redirect === true) {
      this.props.history.push("/login");
    } else {
      alert("No se pudo subir el archivo");
    }
  };

  toggle = () => {
    this.setState({ dropdownOpen: this.state.dropdownOpen ? false : true });
  };

  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        handleSubmit
        className="wholeWidth"
        encType="multipart/form-data"
      >
        <FormGroup row>
          <Col sm={2}>
            <Input
              value={this.state.cleanName}
              type="file"
              name="excelFile"
              placeholder="Excel File"
              onChange={this.handleChange}
              accept=".xls, .xlsx"
            />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
          <Col sm={2} className="pt-3">
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle className="bg-gradient-theme-left border-0" caret>
                Zona Republica
              </DropdownToggle>
              <DropdownMenu onChange={this.handleChange} name="zonaRepublica">
                <DropdownItem>Norte</DropdownItem>
                <DropdownItem>Bajio</DropdownItem>
                <DropdownItem>Sureste</DropdownItem>
                <DropdownItem>Centro</DropdownItem>
                <DropdownItem>Pacifico</DropdownItem>
              </DropdownMenu>
            </Dropdown>
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
  }
}

export default UploadExcelForm;
