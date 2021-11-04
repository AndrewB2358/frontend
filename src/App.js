import logo from './logo.svg'; //dont think i Need logo, maybe need css
import { Switch, Route, Link, Routes, BrowserRouter } from "react-router-dom";
import React from "react";
import './App.css';

import AddUser from "./components/add-User"
import EditUser from "./components/edit-User"
import UserList from "./components/user-list"

function App() {
  return (
    <div className="App">
     <button>Add User</button>
     <p component={UserList}>
       Here are Useres{UserList()} 
     </p>
     {/*
     <a href="/users"/>
     <li>
       <Link to={"/users"}>
         users
       </Link>
     </li>
     <Routes>
     <BrowserRouter>
     <Route exact path={["/","/users"]} component={UserList}/>
     </BrowserRouter>
     </Routes>
     */}
     
    </div>
  );
}

export default App;
