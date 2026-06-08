import React from 'react';
import { employeesData } from '../data/dummy';
import { Header } from '../components';

const Employees = () => (
  <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Employees" />
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500 border-b-2">
          <tr>
            <th className="p-3">Employee</th>
            <th className="p-3">Designation</th>
            <th className="p-3">Country</th>
            <th className="p-3">Hire Date</th>
            <th className="p-3">Reports To</th>
            <th className="p-3">Employee ID</th>
          </tr>
        </thead>
        <tbody>
          {employeesData.map((emp, i) => (
            <tr key={i} className="border-b hover:bg-gray-50">
              <td className="p-3">
                <div className="flex items-center gap-3">
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src={emp.EmployeeImage}
                    alt={emp.Name}
                  />
                  <span className="font-medium">{emp.Name}</span>
                </div>
              </td>
              <td className="p-3">{emp.Title}</td>
              <td className="p-3">{emp.Country}</td>
              <td className="p-3">{emp.HireDate}</td>
              <td className="p-3">{emp.ReportsTo}</td>
              <td className="p-3">{emp.EmployeeID}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Employees;
