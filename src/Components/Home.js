import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () =>{


    const [items, setItems] = useState([]);


    useEffect(() => {
        axios.get("admin/home")
            .then(resp => {
                console.log(resp.data);
                
                setItems(resp.data);
                // console.log(items.data);
            }).catch(err => {
                console.log(err);
            });
    }, []);

    return(
        <div>
<br></br>
      <div class="numbar">
        <table align="center" >
          <tr>
            <td>
              <div class="card_1">
                <div class="">
                  Admin
                </div>
                <div class="">
                {items.admins}
                </div>
              </div>
            </td>
            <td>
              <div class="card_2">
                <div class="">
                  Employee
                </div>
                <div class="">
                {items.employees}
                </div>
              </div>
            </td>
            <td>
              <div class="card_3">
                <div class="">
                  Delivery Man
                </div>
                <div class="">
                    4
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="card_4">
                <div class="">
                  Customer
                </div>
                <div class="">
                    6
                </div>
              </div>
            </td>
            <td>
              <div class="card_5">
                <div class="">
                  Product
                </div>
                <div class="">
                {items.products}
                </div>
              </div>
            </td>
            <td>
              <div class="card_6">
                <div class="">
                    Category
                </div>
                <div class="">
                {items.categories}
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      </div>
    )
}
export default Home; 
