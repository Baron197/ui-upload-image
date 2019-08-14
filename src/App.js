import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import ManagePosts from './components/ManagePosts';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header navBrand={'Instagrin'} />
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/waitingverification" component={WaitingVerification} />
            <Route path="/verified" component={Verified} />
          </div>
      </div>
    )
  }
}

export default App;