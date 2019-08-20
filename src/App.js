import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import ManagePosts from './components/ManagePosts';
import Header from './components/Header';
import Home from './components/Home';
import WaitingVerification from './components/WaitingVerification';
import Register from './components/Register';
import Verified from './components/Verified';
import Login from './components/Login';
import { keepLogin } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.keepLogin()
  }

  render() {
    return (
      <div>
        <Header navBrand={'Instagrin'} />
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/manageposts" component={ManagePosts} />
            <Route path="/register" component={Register} />
            <Route path="/waitingverification" component={WaitingVerification} />
            <Route path="/verified" component={Verified} />
            <Route path="/login" component={Login} />
          </div>
      </div>
    )
  }
}

export default connect(null, { keepLogin })(App);