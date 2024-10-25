import React from 'react'
import '../CSS/dashboard.css'

interface Props{
    isCollapsed:boolean;
}
const Dashboard:React.FC<Props> = ({isCollapsed}) => {
    return(
        <div className={`dashboardComponent ${isCollapsed? "collapsed":""}`}>
            <div className="dashboardContainer">
                <h2>This is Dashboard</h2>
            </div>
        </div>
    )
}

export default Dashboard