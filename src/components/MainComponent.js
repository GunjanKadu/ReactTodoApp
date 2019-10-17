import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './HomeComponent';
import App1 from '../components/App';

class MainComponent extends Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/manage' component={App1} />
                    <Redirect to='/' />
                </Switch>

            </div>
        );
    }
}

export default MainComponent;

