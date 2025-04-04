import React from "react";
import "../CSS/dashboard.css";
import { Pie, PieChart } from "recharts";

interface Props {
  isCollapsed: boolean;
}
const Dashboard: React.FC<Props> = ({ isCollapsed }) => {
  const chartData = [
    { name: "something", value: 400 },
    { name: "anything", value: 500 },
    { name: "anohter", value: 600 },
    { name: "anythig", value: 300 },
  ];
  return (
    <div className={`dashboardComponent ${isCollapsed ? "collapsed" : ""}`}>
      <div className="dashboardContainer">
        <h2 className="bg-red-100">Dashboard</h2>
        <div className="dashboardContentsContainer">
          <section className="barChartSection">
            <h3>Bar Chart</h3>
            <div className="barChart"></div>
          </section>
          <section className="pieChartSection">
            <h3>Pie Chart</h3>
            <div className="pieChart">
              <PieChart width={400} height={500}>
                <Pie data={chartData} dataKey="value"></Pie>
              </PieChart>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
