import React from 'react';
import { customersData } from '../data/dummy';
import { Header } from '../components';

const Customers = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Customers" />
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500 border-b-2">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Project Name</th>
            <th className="p-3">Status</th>
            <th className="p-3">Weeks</th>
            <th className="p-3">Budget</th>
            <th className="p-3">Location</th>
            <th className="p-3">Customer ID</th>
          </tr>
        </thead>
        <tbody>
          {customersData.map((c, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src={c.CustomerImage}
                    alt={c.CustomerName}
                  />
                  <div>
                    <p className="font-medium">{c.CustomerName}</p>
                    <p className="text-gray-400 text-xs">{c.CustomerEmail}</p>
                  </div>
                </div>
              </td>
              <td className="p-3">{c.ProjectName}</td>
              <td className="p-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full" style={{ background: c.StatusBg }} />
                  <span className="capitalize">{c.Status}</span>
                </div>
              </td>
              <td className="p-3">{c.Weeks}</td>
              <td className="p-3">{c.Budget}</td>
              <td className="p-3">{c.Location}</td>
              <td className="p-3">{c.CustomerID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Customers;
