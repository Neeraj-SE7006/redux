import React from "react";
import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./Components/Counter";
import Header from "./Components/Header";
import Auth from "./Components/Auth";
import UserProfile from "./Components/UserProfile";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
