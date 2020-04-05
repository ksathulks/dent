import React from "react";
import { Route, Switch } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import TablesPage from "./pages/TablesPage";
import MapsPage from "./pages/MapsPage";
import NotFoundPage from "./pages/NotFoundPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/dent/clinics/profile" exact component={DashboardPage} />
        <Route
          path="/dent/clinics/profile/dashboard"
          component={DashboardPage}
        />
        <Route path="/dent/clinics/profile/profile" component={ProfilePage} />
        <Route path="/dent/clinics/profile/tables" component={TablesPage} />
        <Route path="/dent/clinics/profile/maps" component={MapsPage} />
        <Route path="/dent/clinics/profile/404" component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
