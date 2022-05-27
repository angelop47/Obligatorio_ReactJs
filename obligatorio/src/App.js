import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { PaginaUsers } from "./components/Pages/PaginaUsers";
import { PaginaUser } from "./components/Pages/PaginaUser";
import { Blog } from "./components/Pages/Blog";
import { Login } from "./components/Pages/Login";
import { PaginaSite } from "./components/Pages/PaginaSite"
import { PaginaUsuario } from "./components/Pages/PaginaUsuario"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/paginaUsers" component={PaginaUsers} />
            <Route path="/paginaUser/:id" component={PaginaUser} />
            <Route path="/usuario" component={PaginaUsuario} />
            <Route path="/login" component={Login} />
            <Route path="/paginaSite/:id" component={PaginaSite} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

