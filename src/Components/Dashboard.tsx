import React from 'react'
import '../CSS/dashboard.css'

const Dashboard:React.FC = () => {
    return(
        <>
        <div className='div1'>
            <p>This is dash board</p>
        </div>
        <div className="div2">
            <p>This is lower lavel</p>
            <button className='btn1'>Add expense</button>
            <button className='btn2'>Cancel</button>
        </div>
        </>
    )
}

export default Dashboard