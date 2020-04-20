import React, { useState, useEffect } from "react";
import "./App.css";
import { Context } from "./components/Context";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import { db } from "./db";
import Tool from "./views/Tool";
import Search from "./views/Search";
import AddTool from "./views/AddTool";

function App() {
  const [state, setState] = useState({
    tools: []
  });
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    setState({...state, tools: db.tools})
  }, [])

  return (
    <Router>
      <Context.Provider value={{ state, setState, searchTerm, setSearchTerm }}>
        <Header />
        <Switch>
          <Route exact path='/rent-a-tool'>
            <Home />
          </Route>

          <Route path='/rent-a-tool/tool/:name'>
            <Tool />
          </Route>

          <Route path='/rent-a-tool/search/:searchTerm'>
            <Search />
          </Route>

          <Route path='/rent-a-tool/addTool'>
            <AddTool />
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;
