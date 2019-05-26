import React from 'react';
import Landingpage from './landingpage';
import {Switch,Route} from 'react-router-dom';
import Aboutme from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Project from './project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={Landingpage}/>
        <Route path="/aboutme" component={Aboutme}/>
        <Route path="/resume" component={Resume}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Project}/>
    </Switch>
)

export default Main;