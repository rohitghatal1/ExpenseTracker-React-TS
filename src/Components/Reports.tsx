import React from "react";
import "../CSS/reports.css";

interface Props {
  isCollapsed: boolean;
}

const Reports: React.FC<Props> = ({ isCollapsed }) => {
  return (
    <>
      <div className={`reportComponent ${isCollapsed ? "collapsed" : ""}`}>
        <div className="reportContainer">
          <div className="report">
            <h2>Reports</h2>

            <div className="reportDetails"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
