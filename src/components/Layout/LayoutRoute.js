import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute = (props) => {

  const { component: Component, layout: Layout, userPermissions, componentPermissions, ...rest } = props;

  console.log("We have permissions", userPermissions, "Componenent permission", componentPermissions);
  if(userPermissions && componentPermissions.some((perm)=>{

    return perm === userPermissions;
  })){

   return (
      <Route
        {...rest}
        render={props => (
          <Layout {...props}>
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
