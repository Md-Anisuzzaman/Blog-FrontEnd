import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchAllBlogs } from '../../../../features/blogs/asynReducers/fetchAllBlogs';
import Button from '../../../../components/Button';
import { generateUniqueID } from '../../../../Helper/helper';
import { DeleteButtonStyle, EditButtonStyle } from '../../../../Helper/style';
import { Link } from 'react-router-dom';

const AllBlogs = () => {

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogStore.allBlogs);

  useEffect(() => {
    dispatch(asyncFetchAllBlogs());
  }, [])

  return (
    <div>
    <h3 className='text-center'>All Blogs</h3>
      <table>
        <thead>
          <tr>
            <th><input type="checkbox" name="" id="" /></th>
            <th>ID</th>
            <th>Title</th>
            <th>Short Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            blogs?.map(blog => <tr key={generateUniqueID()}>
              <td><input type="checkbox" name="" id="" /></td>
              <td>{blog._id}</td>
              <td>{blog.title}</td>
              <td>{blog.short_description}</td>
              <td>
                <Link to={`/dashboard/blogs/blogedit/${blog._id}`}><Button label="Edit" style={EditButtonStyle} /></Link>
                <Button label="Delete" style={DeleteButtonStyle} />
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllBlogs