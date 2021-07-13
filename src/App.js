import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,    
} from 'react-router-dom';
import Home from './Paginas/Home';
import LoginError from './Paginas/LoginError';
import PlaylistCreator from './Paginas/PlaylistCreator';

function App() {
    return(
        <Router >
            <Switch>
                <Route path="/" exact>
                   <Home /> 
                </Route>
                <Route path="/LoginError" exact>
                   <LoginError /> 
                </Route>
                <Route path="/Playlist" exact>
                    <PlaylistCreator />
                </Route>
            </Switch>
        </Router>
    );  
}
export default App