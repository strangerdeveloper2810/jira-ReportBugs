import { Fragment } from "react";
import {Switch, Route, useHistory} from "react-router-dom"
import Loading from "./Components/LoadingComponents/Loading";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { UserLoginTemplate } from "./templates/UserTemplate/UserLoginTemplate";
function App() {
  return (
   <Fragment>
    <Loading/>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/" component={Home}/> 
      <UserLoginTemplate exact path="/login" Component={Login}/>
      <UserLoginTemplate exact path="/register" Component={Register}/>
    </Switch>
   </Fragment>
     
  );
}

export default App;
