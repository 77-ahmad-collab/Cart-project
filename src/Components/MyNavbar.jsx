import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import Navstyles from "./MyNavbar.module.css";
const MyNavbar = () => {
  return (
    <>
      <div className={Navstyles.navbar}>
        <h1 className="text-center">Your Cart</h1>
        <span className={Navstyles.icon}>
          <TiShoppingCart />
        </span>
        {/* <span className={Navstyles.item}>9</span> */}
      </div>
    </>
  );
};

export default MyNavbar;
