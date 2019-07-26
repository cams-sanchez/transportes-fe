import React from 'react';
import { EmptyLayout, LayoutRoute } from '../components/Layout';
import Login from '../pages/login/Login';

const LoginRoutes = (props) => {
  return (
      <LayoutRoute
        exact
        path="/login"
        layout={EmptyLayout}
        component={props => (
          <Login {...props} />
        )}
      />
  );
};

export default LoginRoutes;

