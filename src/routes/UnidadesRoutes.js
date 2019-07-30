import React from 'react';
import { LayoutRoute, MainLayout } from '../components/Layout';
import CrearUnidades from '../pages/unidades/CrearUnidades';

const UnidadesRoutes = (props) => {
  let { userPermissions } = props;
  console.log("In Routes Catalogs");
  return (
    <React.Fragment>
      <LayoutRoute
        exact
        path="/unidades/crear"
        layout={MainLayout}
        component={CrearUnidades}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
    </React.Fragment>
  );
};

export default UnidadesRoutes;

