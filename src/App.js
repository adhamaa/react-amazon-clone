import React, { useEffect } from "react";
// import { useSpring, animated, useTransition } from "react-spring";
import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
// import { Element } from "@stripe/react-stripe-js";

// const promise = loadStripe(
//   "pk_test_51HTqr4BKka46b6Xjf4soHusJUR0GIut7u7ubTAVNikkLSZgrxdehagOaarflZYEwe5mTXmU87hT2uvKPncdB6LQy00MCtihHKI"
// );

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

  // const transitions = useTransition(location, (location) => location.pathname, {
  //   from: {
  //     position: "absolute",
  //     width: "100%",
  //     opacity: 0,
  //     // transform: "translate3d(100%,0,0)",
  //   },
  //   enter: {
  //     opacity: 1,
  //     // transform: "translate3d(0%,0,0)"
  //   },
  //   leave: {
  //     opacity: 0,
  //     // transform: "translate3d(-50%,0,0)",
  //   },
  // });

  return (
    <Switch location={location}>
      <Route exact path="/">
        <Header />
        <Home />
        <Footer />
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
        {/* <Element stripe={promise}> */}
        <Payment />
        {/* </Element> */}
      </Route>
    </Switch>
  );
}

export default App;
