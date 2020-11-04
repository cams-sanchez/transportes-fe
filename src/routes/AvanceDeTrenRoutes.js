import React from 'react';
import { LayoutRoute, MainLayout } from '../components/Layout';
import MostrarAvances from '../pages/dashboard/MostrarAvances';

const AvanceDeTrenRoutes = (props) => {
  let { userPermissions } = props;
  console.log("In Routes Avance de Tren");
  return (
    <React.Fragment>
      <LayoutRoute
        exact
        path="/dashboard"
        layout={MainLayout}
        component={MostrarAvances}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
    </React.Fragment>
  );
};

export default AvanceDeTrenRoutes;

