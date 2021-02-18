import React from "react";
import Navstyles from "./MyNavbar.module.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Cartitem from "./Cartitem";
import { UseGlobalContext } from "../Context";
const CartContainer = () => {
  const { clearcart, cart } = UseGlobalContext();
  console.log(cart, "i am thecart");
  return (
    <>
      {cart.length !== 0 ? (
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-9 col-sm-12 rounded w-100 h-50   mx-auto  ">
              <div className=" bg-light mt-5">
                <div className="row">
                  <div className="col  ">
                    <h1 className="text-center bg-light">YOUR BAG</h1>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Cartitem />
                  </div>
                </div>
                <div className="row">
                  <div className="col text-center">
                    <button
                      className="btn  mb-3 btn-md btn-danger text-white"
                      onClick={clearcart}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5 text-center">
          <h3>Your bag is empty</h3>
        </div>
      )}

      {/* <div className={Navstyles.cartbody}>
        <div className={Navstyles.containerbody}>
          <h1 className={`text-center text-dark ${Navstyles.heading1}`}>
            YOUR BAG
          </h1>
          <div>
            <Cartitem />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default CartContainer;
