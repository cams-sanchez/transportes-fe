import Page from "../../components/Page";
import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import UploadExcelForm from "../../components/Forms/UploadExcelForm";

class UploadExcel extends Component {
  render() {
    return (
      <Page
        title=""
        breadcrumbs={[{ name: "tiros/upload/excel", active: true }]}
        className="TirosUplaodExcelPage"
      >
        <Row>
          <Col>
            <Card>
              <CardHeader>Subir Excel Con Los Tiros</CardHeader>
              <CardBody>
                <Row>
                  <UploadExcelForm />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }
}

export default UploadExcel;
