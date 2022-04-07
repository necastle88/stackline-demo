import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { useSelector } from "react-redux";
import './chart.css'


const Chart = () => {
  const salesData = useSelector(data => data[0]?.sales);
    const renderLineChart = (
        <LineChart width={800} height={500}
            data={salesData} 
            margin={{ top: 100, right: 50, bottom: 0, left: 50 }}
        >
        <Line 
            type="monotone" 
            dataKey="retailSales" 
            stroke="#44a7f6"
            dot={false} 
            strokeWidth={3}
        />
        <Line 
            type="monotone" 
            dataKey="retailerMargin" 
            stroke="#9ba6bf"
            dot={false}
            strokeWidth={3} 
        />
          <CartesianGrid stroke="#ccc"horizontal={false} vertical={false} />
          <XAxis dataKey='weekEnding' />
          <YAxis  hide={true} />
          <Tooltip />
        </LineChart>
      );

    return(
        <div className="container chart">
            <h2>Retail Sales</h2>
            {renderLineChart}
        </div>
    );
}

export default Chart;