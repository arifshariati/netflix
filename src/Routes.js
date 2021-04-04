import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';

// Layouts
import { 
    Main as MainLayout
} from './layouts';

// page
import {
    HomeScreen as HomeScreenView
} from './pages';

const Routes = () => {

    return (

        <Switch>

            <Redirect exact from='/' to='/' />

            <RouteWithLayout
                component={HomeScreenView}
                exact
                layout={MainLayout}
                path='/homescreen'
            />

            <Redirect to="/not-found" />
        
        </Switch>
    );
};

export default Routes;