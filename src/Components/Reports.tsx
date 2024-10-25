import React from 'react'
import '../CSS/reports.css'

interface Props{
    isCollapsed: boolean;
}

const Reports : React.FC<Props> = ({isCollapsed}) => {
    return (
        <>
        <div className={`reportComponent ${isCollapsed? "collapsed" : ""}`}>
            <div className="reportContainer">
                <h2>This is Reports Tab</h2>
            </div>
        </div>
        </>
    )
}

export default Reports