import React from 'react';
import Order from './Order';

const Orders = ({ commands }) => {
  console.log('oders:', commands);

  const ordersData = commands.map((command) => {
    return <Order key={command.id} command={command} />;
  });

  return (
    <div>
      {ordersData}
    </div>
  );
};

export default Orders;
