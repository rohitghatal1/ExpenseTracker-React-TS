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
                <div className="report">
                    <h2>Report Heading</h2>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Reports