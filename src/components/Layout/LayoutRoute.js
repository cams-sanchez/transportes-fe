import React from 'react';
import { Route } from 'react-router-dom';

const LayoutRoute = (props) => {
  const { component: Component, layout: Layout, permission, permissions, ...rest } = props;

  if(permission && permissions.some((perm)=>{
    return perm === permission;
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
  } else if (!permission) {
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
