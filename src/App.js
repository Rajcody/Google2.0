
import './App.css';
import React from 'react';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import { BrowserRouter as Router ,Route, Switch } from 'react-router-dom';

function App() {
  return (
    //BEM
    <div className="app">
        <Router>
          <Switch>
            <Route path ='/search'>
              <SearchPage/>
            </Route>
            <Route path='/'>
               {/*Home(search ) */}
                <Home/>
            </Route>
          </Switch>
        </Router>


       

        
    </div>
  );
}

export default App;
