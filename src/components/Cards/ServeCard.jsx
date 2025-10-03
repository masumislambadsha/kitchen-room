const ServeCard = ({order}) => {
 console.log(order.order_title);

  return (
    <div className="border rounded-xl p-5 shadow bg-green-50 hover:shadow-md transition space-y-1">
      <h3 className="text-xl font-bold text-green-700 mb-2">
        {order.order_title}
      </h3>
      <p className="text-gray-800">
        <span className="font-semibold">Table:</span> {order.table_no}
      </p>

      <p className="text-gray-800">
        <span className="font-semibold">Waiter ID:</span> {order.waiterId}
      </p>

      <p className="text-gray-600 mt-2">
        <span className="font-semibold">Cooking Time:</span> {order.cooked_At}
      </p>
    </div>
  );
};

export default ServeCard;

