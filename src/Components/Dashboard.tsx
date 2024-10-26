import React from 'react'
import '../CSS/dashboard.css'

interface Props{
    isCollapsed:boolean;
}
const Dashboard:React.FC<Props> = ({isCollapsed}) => {
    return(
        <div className={`dashboardComponent ${isCollapsed? "collapsed":""}`}>
            <div className="dashboardContainer">
                <h2>Dashboard</h2>
                <div className="dashboardContentsContainer">
                    <section className="barChartSection">
                        <h2>Bar Chart</h2>
                        <div className="barChart">

                        </div>
                    </section>
                    <section className="pieChartSection">
                        <h2>Pie Chart</h2>
                        <div className="pieChart"></div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Dashboard