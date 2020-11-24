import React from "react";
import { BrowserRouter as Router , Route, Switch } from "react-router-dom"

import Navbar from "../Navbar/index";
import Landing from "../../pages/Landing/index";
import Recipes from "../../pages/Recipes/index";
import MealPlanner from "../../pages/MealPlanner/index";
import Nutrition from "../../pages/Nutrition/index";
import Settings from "../../pages/Settings/index";

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" render={ () =>
        <div>
          <Landing />
        </div>
      } />
      <Route exact path="/recipes" render={ () =>
          <div>
            <Navbar />
            <Recipes />
          </div>
        } />
      <Route exact path="/meal-planner" render={ () =>
          <div>
            <Navbar />
            <MealPlanner />
          </div>
        } />
      <Route exact path="/nutrition" render={ () =>
          <div>
            <Navbar />
            <Nutrition />
          </div>
        } />
      <Route exact path="/settings" render={ () =>
          <div>
            <Navbar />
            <Settings />
          </div>
        } />
      <Route path="/" render={() => <div>404</div>} />
    </Switch>
  </Router>
);

export default App;
