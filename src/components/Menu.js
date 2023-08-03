import React from "react";
import { Data } from "../helpers/Data";
import   MenuItem   from "./MenuItem.js"; //süslü parantezsiz yazdım. default export

const Menu = () => {
  return (
    <div className="container alt">
      <div className="row">
        <div className="col-12 my-3 text-center">
            <h2>Burgerlerimiz</h2>
        </div>
        {
            Data.map((menuItem,key)=>{
                return(<MenuItem
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
                content={menuItem.content}
                />)
            })
        }
        
      </div>
    </div>
  );
};

export default Menu;
