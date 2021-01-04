import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './Footer';
const promise = loadStripe(
  'pk_test_51I5oHIFQSiZUYx2umpU1Xpsv92tezskCyXzoh3hC9F4LXt9LRr64aOoolxLsR4zQbws7IGxq3RmnxYPS24l7e5Nd00XfHRW84P'
);
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // only run once hen the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log('The user is>>', authUser);

      if (authUser) {
        // the user just loggedin /the user ws logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* default route */}
          {/* note:the dault route to be at bottom always */}
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
