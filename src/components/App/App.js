import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';




import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Confirmation from '../Confirmation/Confirmation';
import Admin from '../Admin/Admin';

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>     

          <Route exact path="/" component={Feelings} />
          <Route exact path="/understanding" component={Understanding} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/confirmation" component={Confirmation} />
          <Route exact path="/admin" component={Admin} />


        
        </Router>
  
      </div>
    );
  }
}

export default App;
