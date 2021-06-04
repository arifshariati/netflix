import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import { RouteWithLayout } from './components';

// Layouts
import { 
    Main as MainLayout
} from './layouts';

// page
import {
    HomeScreen as HomeScreenView,
    LoginScreen as LoginScreenView
} from './pages';

const Routes = () => {

    return (

        <Switch>

            <Redirect exact from='/' to='/homescreen' />

            <RouteWithLayout
                component={HomeScreenView}
                exact
                layout={MainLayout}
                path='/homescreen'
            />

            <Route 
                component={LoginScreenView}
                exact
                path='/login'
            />

            <Redirect to="/not-found" />
        
        </Switch>
    );
};

export default Routes;