import React from 'react';
import { LayoutRoute, MainLayout } from '../components/Layout';
import TipoCarga from '../pages/catalogs/TipoCarga';
import TipoGasto from '../pages/catalogs/TipoGasto';
import Establecimiento from '../pages/catalogs/Establecimiento';

const CatalogRoutes = (props) => {
  let { userPermissions } = props;
  console.log("In Routes Catalogs");
  return (
    <React.Fragment>
      <LayoutRoute
        exact
        path="/catalogos/tiposdecarga"
        layout={MainLayout}
        component={TipoCarga}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
      <LayoutRoute
        exact
        path="/catalogos/tiposdegasto"
        layout={MainLayout}
        component={TipoGasto}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
      <LayoutRoute
        exact
        path="/catalogos/establecimiento"
        layout={MainLayout}
        component={Establecimiento}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
    </React.Fragment>
  );
};

export default CatalogRoutes;

