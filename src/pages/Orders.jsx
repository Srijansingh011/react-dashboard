import React from 'react';
import { ordersData } from '../data/dummy';
import { Header } from '../components';

const Orders = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Orders" />
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500 border-b-2">
          <tr>
            <th className="p-3">Image</th>
            <th className="p-3">Item</th>
            <th className="p-3">Customer Name</th>
            <th className="p-3">Total Amount</th>
            <th className="p-3">Status</th>
            <th className="p-3">Order ID</th>
            <th className="p-3">Location</th>
          </tr>
        </thead>
        <tbody>
          {ordersData.map((order) => (
            <tr key={order.OrderID + order.CustomerName} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <img
                  className="rounded-xl h-16 w-16 object-cover"
                  src={order.ProductImage}
                  alt={order.OrderItems}
                />
              </td>
              <td className="p-3 font-medium">{order.OrderItems}</td>
              <td className="p-3">{order.CustomerName}</td>
              <td className="p-3">${order.TotalAmount}</td>
              <td className="p-3">
                <span
                  className="text-white py-1 px-3 capitalize rounded-2xl text-xs"
                  style={{ background: order.StatusBg }}
                >
                  {order.Status}
                </span>
              </td>
              <td className="p-3">{order.OrderID}</td>
              <td className="p-3">{order.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Orders;
