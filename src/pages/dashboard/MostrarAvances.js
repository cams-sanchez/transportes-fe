import Page from "../../components/Page";
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import AvancesSeleccionTrenForm from "../../components/Forms/AvancesSeleccionTrenForm";

class MostrarAvances extends Component {
  render() {
    return (
      <Page
        title=""
        breadcrumbs={[{ name: "dashboard", active: true }]}
        className="TirosUplaodExcelPage"
      >
        <Row>
          <Col>
            <Card>
              <CardHeader>Informacion Del Avance Del Tren</CardHeader>
              <CardBody>
                <Row>
                  <AvancesSeleccionTrenForm />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default MostrarAvances;
