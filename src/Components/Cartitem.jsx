import React from "react";
import { UseGlobalContext } from "../Context";
import {
  RiArrowDropDownFill,
  RiArrowDropDownLine,
  RiArrowDropUpFill,
} from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import Navstyles from "./MyNavbar.module.css";
const Cartitem = () => {
  const { cart, total, removeitem, increase, decrease } = UseGlobalContext();
  console.log(cart, "i am data of global context");
  return (
    <div className="container p-3">
      {cart.map(({ title, price, img, amount, id }) => {
        return (
          <div className="row ">
            <img
              className="col-3  col-md-3 col-sm-4 col-xs-4  "
              src={img}
              alt="ahamd"
              width="100px"
              height="100px"
            ></img>
            <div className="col-9 col-md-9  col-sm-8 col-xs-8 ">
              <div className="row align-items-center">
                <div className="col-9   d-flex flex-column">
                  <h5>{title}</h5>
                  <span>{price}</span>
                  <p className="text-danger" onClick={() => removeitem(id)}>
                    remove
                  </p>
                </div>
                <div className="col-3  d-flex flex-column justify-content-center align-items-center ">
                  <button
                    className="btn btn-sm bg-secondary text-white display-1"
                    onClick={() => increase(id)}
                  >
                    <RiArrowDropUpFill />
                  </button>
                  {amount}
                  <button
                    className="btn btn-sm bg-secondary text-white display-1"
                    onClick={() => decrease(id)}
                  >
                    <RiArrowDropDownLine />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="row align-items-center ">
        <div className="col-11 mx-auto d-flex mt-3 justify-content-between ">
          <h5>Total</h5>
          <p>${total}</p>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
