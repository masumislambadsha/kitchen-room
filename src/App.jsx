import "./App.css";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import States from "./components/States";

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
        <States></States>
      </section>
    </>
  );
}

export default App;
