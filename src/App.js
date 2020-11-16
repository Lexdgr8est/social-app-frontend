import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import ConfirmPassword from "./pages/ConfirmPassword";
import AddNewPassword from "./pages/AddNewPassword";
import PasswordResetEmail from "./pages/PasswordResetEmail";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (

    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/reset-email" component={PasswordResetEmail} />
      <Route path="/new-password" component={AddNewPassword} />
      {/* <Route path="/dashboard" component={Dashboard} /> */}
      <Route path="/confirm-password" component={ConfirmPassword} />
      <ProtectedRoutes path="/dashboard" component={Dashboard} />
    </Switch>

  );
}

export default App;
