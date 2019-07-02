import Page from '../../components/Page';
import React, {Component} from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import axios from 'axios/index';
import ApiEndPoints from '../../config/apiEndPoints';

class TipoCarga extends Component{
  state = {
    tipoDeCarga: '',
    Id: '',
  };

  apicall = new ApiEndPoints();
  componentDidMount () {
    let apiCall = this.apicall.getAllTiposDeCarga();
    console.log(apiCall);
    axios.get(apiCall).then( response => {
      console.log(response);
    }).catch(error => {
      console.log('There was an error ', error);
    })
  }

  render() {
    return (
      <Page
        title=""
        breadcrumbs={[{ name: 'tipo-de-carga', active: true }]}
        className="CatalogsTipoDeCargaPage"
      >
        <Row>
          <Col>
            <Card className="mb-3">
              <CardHeader>Tipos de Carga</CardHeader>
              <CardBody>
                <Table size="sm">
                  <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tipo De Carga</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Page>
    );
  }

}

export default TipoCarga;
