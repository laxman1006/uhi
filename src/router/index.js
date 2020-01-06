import React from 'react';
import { Switch,Route } from 'react-router-dom';
import on_click from '../on_click/onclick';
import {Apps} from '../Header.js'

export function RouterPath (){
     
    return(
            <Switch>
                <Route exact path="/" component={Apps}/>
                <Route exact path='/ADHD' component={on_click}></Route>
            </Switch>
    )
}