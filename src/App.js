import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndOut from './components/sign-in-and-sign-out/sign-in-and-sign-out.component';
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({ currentUser: user }, console.log(user))
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={ this.state.currentUser } />
        <Switch>
          <Route exact path='/' component={ HomePage } />
          <Route exact path='/shop/' component={ ShopPage } />
          <Route exact path='/signin' component={ SignInAndOut } />
        </Switch>
      </div>
    )
  }
}

export default App;