import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

const App = () => {
    return (
        <Router>
            <div id="root">
                <HeaderComponent />
                <div className="content container">
                    <Switch>
                        <Route path="/" exact component={ListEmployeeComponent} />
                        <Route path="/employees" component={ListEmployeeComponent} />
                        <Route path="/add-employee/:id" component={CreateEmployeeComponent} />
                        <Route path="/view-employee/:id" component={ViewEmployeeComponent} />
//                        <Route path="/update-employee/:id" component={UpdateEmployeeComponent} />
                    </Switch>
                </div>
                <FooterComponent />
            </div>
        </Router>
    );
};

export default App;
