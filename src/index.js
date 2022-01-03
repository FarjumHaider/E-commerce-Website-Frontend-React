import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Head from "./Components/Head";
import Home from "./Components/Home";
import AllAdmin from './Components/Admin/AllAdmin';

import axios from 'axios';
import AdminDetail from './Components/Admin/AdminDetail';
import AddAdmin from './Components/Admin/AddAdmin';
import AllCategory from './Components/Category/AllCategory';
import AddCategory from './Components/Category/AddCategory';
import EditCategory from './Components/Category/EditCategory';
import AllProduct from './Components/Product/AllProduct';
import AddProduct from './Components/Product/AddProduct';
import EditProduct from './Components/Product/EditProduct';
import EditAdmin from './Components/Admin/EditAdmin';
import ProductDetail from './Components/Product/ProductDetail';
import Login from './Components/Login';
import PayingList from './Components/EmployessSalary/PayingList';
import PayedList from './Components/EmployessSalary/PayedList';
import PayingSalary from './Components/EmployessSalary/PayingSalary';
import PayingDue from './Components/EmployessSalary/PayingDue';
import Logout from './Components/Logout';


axios.defaults.baseURL = "http://127.0.0.1:8000/api/";

var token = null;
if(localStorage.getItem('user')){
  var obj = JSON.parse(localStorage.getItem('user'));
  token = obj.access_token;
}
axios.defaults.baseURL="http://127.0.0.1:8000/api/";
axios.defaults.headers.common["Authorization"] = token;

ReactDOM.render(
  <React.StrictMode>

    <Router>

      <Switch>
        <Route exact path="/">
        
          <Login></Login>
        </Route>
        <Route exact path="/home">
          <Head />
          <Home />
        </Route>
        <Route exact path="/admin/list">
          <Head />
          <AllAdmin></AllAdmin>
        </Route>
        <Route exact path="/add/admin">
          <Head />
          <AddAdmin></AddAdmin>
        </Route>
        <Route exact path="/admin/details/:id/:name">
          <Head />
          <AdminDetail></AdminDetail>
        </Route>
        <Route exact path="/edit/admin/:id">
          <Head />
          <EditAdmin />
        </Route>
        <Route exact path="/category/list">
          <Head />
          <AllCategory />
        </Route>
        <Route exact path="/add/category">
          <Head />
          <AddCategory />
        </Route>
        <Route exact path="/edit/category/:id/:name">
          <Head />
          <EditCategory />
        </Route>
        <Route exact path="/product/list">
          <Head />
          <AllProduct />
        </Route>
        <Route exact path="/add/product">
          <Head />
          <AddProduct />
        </Route>
        <Route exact path="/edit/product/:id">
          <Head />
          <EditProduct />
        </Route>
        <Route exact path="/product/details/:id/:name">
          <Head />
          <ProductDetail />
        </Route>
        <Route exact path="/employee/payment">
          <Head />
          <PayingList/>
        </Route>
        <Route exact path="/salaty/paid/list">
          <Head />
          <PayedList/>
        </Route>
        <Route exact path="/paying/salary/:id/">
          <Head />
          <PayingSalary/>
        </Route>
        <Route exact path="/paying/due/:id/">
          <Head />
          <PayingDue/>
        </Route>
        <Route exact path="/logout">
          <Head />
          <Logout></Logout>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
