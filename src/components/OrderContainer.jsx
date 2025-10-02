import React, { use } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCard';

const OrderContainer = ({orderPromise}) => {
  const orders = use(orderPromise)
  console.log(orders);

  return (
    <div>
      <States orderTotal={orders.length}></States>
      <section className=' container mx-auto py-10 gird grid-cols-1 md:grid-cols-12 gap-5 '>
        <div className='md:col-span-7'>
          <h2 className='font-bold text-4xl '></h2>
          <div className='space-y-5'>
            {
              orders.map(order =>
                <OrderCard key={order.id} order={order}></OrderCard>
              )
            }

          </div>
        </div>
        <div className='md:col-span-5'>
        </div>
      </section>
    </div>
  );
};

export default OrderContainer;
