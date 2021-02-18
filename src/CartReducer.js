const cartarray = (state, action) => {
  if (action.type === "CLEARCART") {
    console.log("your array is okay");

    return { ...state, cart: [] };
  }
  if (action.type === "REMOVEITEM") {
    console.log("ahooo");
    const temp = [...state.cart];
    console.log(temp, "i am temp");
    const cart = temp.filter((val) => val.id !== action.payload);
    return { ...state, cart };
  }
  if (action.type === "INCREASE") {
    console.log("i am in increase mode");
    const cart = state.cart.map((val) => {
      if (val.id === action.payload) {
        return { ...val, amount: val.amount + 1 };
      }
      return val;
    });

    console.log(cart);
    return { ...state, cart };
  }
  if (action.type === "DECREASE") {
    const cart = state.cart
      .map((val) => {
        if (val.id === action.payload) {
          return { ...val, amount: val.amount - 1 };
        }
        return val;
      })
      .filter((val) => val.amount !== 0);
    return { ...state, cart };
  }
  if (action.type === "GETTOTAL") {
    console.log("i am the state");
    let { totalprice, totalamount } = state.cart.reduce(
      (total, currentitem) => {
        total.totalprice += currentitem.price * currentitem.amount;
        total.totalamount += currentitem.amount;
        return total;
      },
      {
        totalprice: 0,
        totalamount: 0,
      }
    );
    console.log(totalprice, totalamount);
    totalprice = parseFloat(totalprice.toFixed(2));
    return { ...state, total: totalprice };
  }
};
export default cartarray;
