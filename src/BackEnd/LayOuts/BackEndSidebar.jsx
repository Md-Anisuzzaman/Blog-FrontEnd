import React from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setBlogsToggle, setMenuToggle, setUsersToggle } from '../../features/settings/settingSLice';

const BackEndSidebar = () => {

    const { isSidebarOpen, isBlogsMangament, isUsersMangament } = useSelector((state) => state.settings)
    const dispatch = useDispatch()

    return (
        <div className={`sidebar ${isSidebarOpen ? 'sidebar_close' : ''}`}>
            <div className="brand">
                <h4>Dashboard</h4>
            </div>

            <div className="list__parent">
                <span onClick={() => dispatch(setMenuToggle())}><i className="fa-brands fa-blogger"></i>Blogs Management</span>
                {
                    // isBlogsMangament && (
                        <ul className='d-none'>
                            <li><Link to="/dashboard/blogs/allblogs"><i className="fa-solid fa-cube"></i>All Blogs</Link></li>
                            <li><Link to="/dashboard/blogs/blogscreate"><i className="fa-solid fa-cube"></i>Create Blogs</Link></li>
                            <li><Link to="/dashboard/blogs/edit"><i className="fa-solid fa-cube"></i>Edit Blogs</Link></li>
                        </ul>
                    // )
                }
            </div>

            <div className="list__parent">
                <span onClick={() => dispatch(setUsersToggle(!isUsersMangament))}><i className="fa-solid fa-folder-open"></i>Users Management</span>
                {
                    isUsersMangament && (
                        <ul>
                            <li><Link to="/dashboard/users/allusers"><i className="fa-regular fa-circle-stop"></i>All Users</Link></li>
                            <li><Link to="/dashboard/users/usercreate"><i className="fa-regular fa-circle-stop"> </i>Create User</Link></li>
                            <li><Link to="/dashboard/users/edit"><i className="fa-regular fa-circle-stop"></i> Edit User</Link></li>
                        </ul>
                    )
                }
            </div>

        </div>
    )
}

export default BackEndSidebar