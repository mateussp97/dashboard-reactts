import React from "react";
import { Switch, Route } from "react-router-dom";
//? Import components
import Layout from "../components/Layout";
//? Import pages
import Dashboard from "./../pages/Dashboard/index";
import List from "./../pages/List/index";

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/list/:type" exact component={List} />
    </Switch>
  </Layout>
);

export default AppRoutes;
