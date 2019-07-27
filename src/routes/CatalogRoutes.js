import React from 'react';
import { LayoutRoute, MainLayout } from '../components/Layout';
import TipoCarga from '../pages/catalogs/TipoCarga';
import TipoGasto from '../pages/catalogs/TipoGasto';
import Establecimiento from '../pages/catalogs/Establecimiento';
import TipoEstablecimiento from '../pages/catalogs/TipoEstablecimiento';
import TipoMantenimiento from '../pages/catalogs/TipoMantenimiento';
import TipoIncidencia from '../pages/catalogs/TipoIncidencia';

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
      <LayoutRoute
        exact
        path="/catalogos/tipoestablecimiento"
        layout={MainLayout}
        component={TipoEstablecimiento}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
      <LayoutRoute
        exact
        path="/catalogos/tipomantenimiento"
        layout={MainLayout}
        component={TipoMantenimiento}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
      <LayoutRoute
        exact
        path="/catalogos/tipoincidencia"
        layout={MainLayout}
        component={TipoIncidencia}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
    </React.Fragment>
  );
};

export default CatalogRoutes;

