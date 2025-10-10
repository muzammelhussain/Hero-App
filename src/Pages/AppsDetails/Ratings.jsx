import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Ratings = ({ ratings }) => {
  const data = ratings.map((r) => ({ name: r.name, count: r.count }));
  const reverseData = data.reverse();
  return (
    <div className="w-full h-[300px]  my-20">
      <h1 className="text-2xl font-bold text-[#001931]">Ratings</h1>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={reverseData}
          layout="vertical"
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <YAxis type="category" />
          <XAxis type="number" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            fill="#FF8811"
            barSize={40}
            radius={[0, 6, 6, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Ratings;
