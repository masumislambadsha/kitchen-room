import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./Cards/OrderCard";
import CookingCard from "./Cards/CookingCard";
import ServeCard from "./Cards/ServeCard";

const OrderContainer = ({ orderPromise }) => {
  const orders = use(orderPromise);

  const [orderCount, setOrderCount] = useState(orders.length);
  const [cookingItems, setCookingItems] = useState([]);
  const [cooked, setCooked] = useState([]);

  // Order কে Cooking-এ add করার handle
  const handelOrder = (order) => {
    const isExist = cookingItems.find((item) => item.id === order.id);
    if (isExist) {
      return;
    }
    setCookingItems([...cookingItems, order]);
    setOrderCount(orderCount - 1);
  };

  // Cooking থেকে Serve-এ add করার handle
  const handleCooked = (order) => {
    const isExist = cooked.find((item) => item.id === order.id);
    if (isExist) {
      return;
    }
    setCooked([...cooked, order]);
    setCookingItems(cookingItems.filter(item => item.id !== order.id));
  };

  return (
    <div>
      <States
        orderTotal={orderCount}
        cookingTotal={cookingItems.length}
        cookedTotal={cooked.length}
      />
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 ">
        <div className="col-span-2">
          <h2 className="font-bold text-4xl "></h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                handelOrder={handelOrder}
                order={order}
              />
            ))}
          </div>
        </div>
        <div className="space-y-5 lg:mt-0 mt-10">
          <h2 className="font-bold text-4xl ">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {cookingItems.map((order) => (
              <CookingCard
                key={order.id}
                order={order}
                handleCooked={handleCooked}
              />
            ))}
          </div>
          <h2 className="font-bold text-4xl ">Order Ready</h2>
          <div className="shadow p-10 space-y-6">
            {cooked.map((order) => (
              <ServeCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
