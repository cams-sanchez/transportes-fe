import React from 'react';
import { LayoutRoute, MainLayout } from '../components/Layout';
import DisplayTiros from '../pages/tiros/DisplayTiros';

const TirosRoutes = (props) => {
  let { userPermissions } = props;
  console.log("In Tiros");
  return (
    <React.Fragment>
      <LayoutRoute
        exact
        path="/tiros/"
        layout={MainLayout}
        component={DisplayTiros}
        userPermissions={userPermissions}
        componentPermissions={['a', 'b']}
      />
    </React.Fragment>
  );
};

export default TirosRoutes;

