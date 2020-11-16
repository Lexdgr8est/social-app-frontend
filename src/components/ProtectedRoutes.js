import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { DataContext } from '../Context';

const ProtectedRoutes = ({ component }) => {
    const { auth } = useContext(DataContext);
    const Component = component;

    return auth ? (
        <Component />
    ) : (
            <Redirect to={{ pathname: '/login' }} />
        )
}

export default ProtectedRoutes
