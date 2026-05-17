import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { monthlySales } from '../data/salesData';

const MonthlySalesChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={monthlySales}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="sales" stroke="#8884d8" name="Sales" />
        <Line type="monotone" dataKey="profit" stroke="#82ca9d" name="Profit" />
        <Line type="monotone" dataKey="target" stroke="#ffc658" name="Target" strokeDasharray="5 5" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MonthlySalesChart;
