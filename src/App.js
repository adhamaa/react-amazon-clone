import React, { useEffect } from "react";
import { useSpring, animated, useTransition } from "react-spring";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Footer";
import Payment from "./Payment";

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component is loads...
    auth.onAuthStateChanged((authUser) => {
      // console.log("The User is >>>", authUser);

      if (authUser) {
        // the user just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is not logged in
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  const location = useLocation();
  // console.log("location:", location);

  const transitions = useTransition(location, (location) => location.pathname, {
    from: {
      position: "absolute",
      width: "100%",
      opacity: 0,
      // transform: "translate3d(100%,0,0)",
    },
    enter: {
      opacity: 1,
      // transform: "translate3d(0%,0,0)"
    },
    leave: {
      opacity: 0,
      // transform: "translate3d(-50%,0,0)",
    },
  });

  return transitions.map(({ item: location, props, key }) => (
    <animated.div key={key} style={props}>
      <Switch location={location}>
        <Route exact path="/" component={Home}>
          <Header />
          <Home />
          <Footer />
        </Route>
        <Route path="/login" component={Login}>
          <Login />
        </Route>
        <Route path="/checkout" component={Checkout}>
          <Header />
          <Checkout />
        </Route>
        <Route path="/payment">
          <Header />
          <Payment />
        </Route>
      </Switch>
    </animated.div>
  ));
}

export default App;
