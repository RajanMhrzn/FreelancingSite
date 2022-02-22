import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/common/LandingPage";
import { Login } from "./components/Authentication/Login";
import { Signup } from "./components/Authentication/Signup";
import { BrowseTalents } from "./components/common/BrowseTalents";
import { Profile } from "./components/Pages/Profile";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Router>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/browse-talents">
                <BrowseTalents />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/">
                <LandingPage />
              </Route>
            </Switch>
          </Router>
        </Switch>
      </Router>
    </>
  );
}

export default App;
