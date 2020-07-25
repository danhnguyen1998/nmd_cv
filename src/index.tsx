import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import { ConnectedRouter } from "connected-react-router";
import Page404Component from "containers/components/404";
import { SYSTEM } from "containers/contants";
import "mdbreact/dist/css/mdb.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { PersistGate } from "redux-persist/integration/react";
import HomeComponent from "screens/home";
import "./assets/scss/main.scss";
import configureStore from "./boot/configureStore";

const store = configureStore.setup();

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem(SYSTEM.TOKEN);
  const auth = props => (!token ? <Redirect to="/login" /> : <Component {...props} />);
  return <Route {...rest} render={auth} />;
};

ReactDOM.render(
  <Provider store={store.store}>
    <PersistGate loading={null} persistor={store.persistor}>
      <ConnectedRouter history={configureStore.history}>
        <Switch>
          <Redirect from="/" exact to="/home" />
          <Route path="/home">
            <Route exact path="/home" component={HomeComponent} />
          </Route>
          <Route path="/settings-page"></Route>
          <Route component={Page404Component} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("bitwage-root")
);
