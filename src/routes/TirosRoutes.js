import React from 'react';
import {LayoutRoute, MainLayout} from '../components/Layout';
import UploadExcel from '../pages/tiros/UploadExcel';

const TirosRoutes = (props) => {
    let {userPermissions} = props;
    console.log("In Tiros");
    return (
        <React.Fragment>
            {/*<LayoutRoute
                exact
                path="/tiros/"
                layout={MainLayout}
                component={DisplayTiros}
                userPermissions={userPermissions}
                componentPermissions={['a', 'b']}
            />
            <LayoutRoute
                exact
                path="/tiros/crear"
                layout={MainLayout}
                component={CrearTiros}
                userPermissions={userPermissions}
                componentPermissions={['a', 'b']}
            />*/}
            <LayoutRoute
                exact
                path="/tiros/upload/excel"
                layout={MainLayout}
                component={UploadExcel}
                userPermissions={userPermissions}
                componentPermissions={['a', 'b']}
            />
            {/*<LayoutRoute
                exact
                path="/tiros/upload/evidencias"
                layout={MainLayout}
                component={UploadEvidencias}
                userPermissions={userPermissions}
                componentPermissions={['a', 'b']}
            />
            <LayoutRoute
                exact
                path="/tiros/eliminar"
                layout={MainLayout}
                component={DeleteTiros}
                userPermissions={userPermissions}
                componentPermissions={['a', 'b']}
            />*/}
        </React.Fragment>
    );
};

export default TirosRoutes;

