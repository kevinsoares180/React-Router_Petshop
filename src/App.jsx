import React from "react";
import { BrowserRouter as Router, Route, Switch as Switcher } from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Pagina404 from './paginas/Pagina404'
import Cabecalho from './assets/Componentes/Cabecalho'
import "./assets/css/base/base.css";
import Post from './paginas/Posts'
import Categoria from "./paginas/Categoria";

function App() {
  return (
    <>
      <Router>
        <Cabecalho/>
        <Switcher>
        <Route exact path ="/">
          <Home />
        </Route>
        <Route path ="/sobre">
          <Sobre />
        </Route>
        <Route path ="/categoria/:id">
          <Categoria />
        </Route>
        <Route path ="/posts/:id">
          <Post />
        </Route>
        <Route>
          <Pagina404/>
        </Route>
        </Switcher>
      </Router>
    </>
  );
}

export default App;
