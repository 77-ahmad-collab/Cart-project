import "./App.css";
import CartContainer from "./Components/CartContainer";
import MyNavbar from "./Components/MyNavbar";

function App() {
  const data = [
    {
      price: 300,
      amount: 2,
    },
    {
      price: 500,
      amount: 3,
    },
  ];
  const totalsalary = data.reduce(
    (total, currentitem) => {
      const { price, amount } = currentitem;
      total.totalprice += price * amount;
      total.totalitem += amount;
      return total;
    },
    {
      totalitem: 0,
      totalprice: 0,
    }
  );
  console.log(totalsalary, "i am the total salary");
  return (
    <div>
      <MyNavbar />
      <CartContainer />
    </div>
  );
}

export default App;
