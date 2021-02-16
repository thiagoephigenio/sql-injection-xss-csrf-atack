import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import ToDoList from "./pages/ToDoList/ToDoList";
import Login from "./pages/Login/Login";
import { isAuthenticated } from "./services/auth";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);


// const Routes = () => {
  
//   return (
//     <BrowserRouter>
//       <Switch>
//         <Route path="/login" component={Login}>
//           {isAuthenticated() ? <Redirect to={{ pathname: "/tasks" }} /> : ""}
//         </Route>
//         <Route exact path="/">
//           <Redirect to={{ pathname: "/tasks" }} />
//         </Route>
//         <Route path="/tasks" component={ToDoList} />
//         <Route path="/teste" component={() => <h1>Teste Works !</h1>} />
//         <PrivateRoute path="*" component={() => <h1>Page not found</h1>} />
//       </Switch>
//     </BrowserRouter>
//   );
// };
const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login}>
          {isAuthenticated() ? <Redirect to={{ pathname: "/tasks" }} /> : ""}
        </Route>
        <Route exact path="/">
          <Redirect to={{ pathname: "/tasks" }} />
        </Route>
        <PrivateRoute path="/tasks" component={ToDoList} />
        <Route path="/teste" component={() => <h1>Teste Works !</h1>} />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
