import React, { use } from 'react';
import States from './States';

const OrderContainer = ({orderPromise}) => {
  const orders = use(orderPromise)
  console.log(orders);

  return (
    <div>
      <States></States>
    </div>
  );
};

export default OrderContainer;
