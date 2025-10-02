import React, { use, useState } from "react";
import States from "./States";
import OrderCard from "./Cards/OrderCard";
import CookingCard from "./Cards/CookingCard";

const OrderContainer = ({ orderPromise }) => {
  const orders = use(orderPromise);

  const [cookingItems, setCookingItems] = useState([]);

  const handelOrder = (order) => {
    console.log(order)

    const isExist = cookingItems.find(item => item.id === order.id)

    if(isExist) {
      return
    }


    const newCookingItems =[...cookingItems, order]
    setCookingItems(newCookingItems)

  };
  console.log(cookingItems);

  return (
    <div>
      <States
      cookingTotal = {cookingItems.length}
      orderTotal={orders.length}
      ></States>
      {/* container mx-auto py-10 gird grid-cols-1 md:grid-cols-12 gap-5 */}
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-10 ">
        <div className="col-span-2">
          <h2 className="font-bold text-4xl "></h2>
          <div className="space-y-5">
            {orders.map((order) => (
              <OrderCard
                key={order.id}
                handelOrder={handelOrder}
                order={order}
              ></OrderCard>
            ))}
          </div>
        </div>
        <div className="space-y-5 lg:mt-0 mt-10">
          <h2 className="font-bold text-4xl ">Cooking Now</h2>
          <div className="shadow p-10 space-y-5">
            {
              cookingItems.map(order=>
               <CookingCard
               order={order}
               key={order.id}></CookingCard>
              )
            }
          </div>
          <h2 className="font-bold text-4xl ">Order Ready</h2>
          <div className="shadow p-10"></div>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
