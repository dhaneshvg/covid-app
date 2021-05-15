import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Header from './Components/Header';
import India from './Components/India';
import World from './Components/World';
import Statedata from './Components/Statedata';

import { 
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';



function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Header/>
        <Switch>

          <Route exact path="/">
            <India/>
          </Route>

          <Route path="/india">
            <India/>
          </Route>

          <Route path="/world">
            <World/>
          </Route>

          <Route path="/statedata">
            <Statedata/>
          </Route>

        </Switch>



      </Router>
    </div>
  );
}

export default App;
