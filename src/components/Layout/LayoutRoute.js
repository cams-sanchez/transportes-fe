import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute = (props) => {

  const { component: Component, layout: Layout, userPermissions, componentPermissions, ...rest } = props;

  if(userPermissions && componentPermissions.some((perm)=>{
    return perm === userPermissions;
  })){

   return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  } else if (!userPermissions) {
    return (
      <Route
        {...rest}
        render={props => (
          <Layout>
            <Component {...props} />
          </Layout>
        )}
      />
    )
  }
  return null;
};

export default LayoutRoute;
