import { Suspense } from "react";
import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import OrderContainer from "./components/OrderContainer";

const loadOrders = () => fetch('/orders.json'). then(res => res.json())

const orderPromise = loadOrders();




function App() {
  return (
    <>
      <header className="container mx-auto pt-5">
        <Navbar></Navbar>
      </header>
      <section>
        <Heading>Kitchen Room</Heading>
      </section>
      <section>
        <Suspense fallback={'laoding '}>
          <OrderContainer
          orderPromise={orderPromise}
          ></OrderContainer>
        </Suspense>

      </section>
    </>
  );
}

export default App;
