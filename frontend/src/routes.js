import React, { useContext } from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AuthProvider, Context } from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import PedidoGetAll from './pages/Pedido/GetAll';
import Register from './pages/Register';

function RouteWraper({ authRequired, ...props }) {
  const { authenticated, loading } = useContext(Context);
  
  if (loading) return '';

  if (authRequired && !authenticated) {
    return <Redirect to='/login' />
  }
  
  return <Route {...props} />
}

function Routes() {
  return (
    <AuthProvider>
      <HashRouter>
        <Switch>
          <RouteWraper path="/" exact component={Home} />
          <RouteWraper path="/login" component={Login} />
          <RouteWraper path="/register" component={Register} />
          <RouteWraper authRequired path="/pedidos" component={PedidoGetAll} />
        </Switch>
      </HashRouter>
    </AuthProvider>
  );
}

export default Routes;