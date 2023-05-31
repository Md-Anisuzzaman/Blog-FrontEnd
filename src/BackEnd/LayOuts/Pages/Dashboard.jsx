import React from 'react'
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1 className='text-center'>Hello from Dashboard</h1>
      <div className="btn btn-primary ms-5 mt-5"> AllNews</div>
      <Link to='/createnews'><button className="btn btn-success ms-5 mt-5"> CreateNews </button></Link>
      <div className="btn btn-secondary ms-5 mt-5"> EditNews </div>
    </div>
  )
}

export default Dashboard