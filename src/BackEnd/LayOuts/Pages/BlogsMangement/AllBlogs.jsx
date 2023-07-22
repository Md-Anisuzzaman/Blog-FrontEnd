import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchAllBlogs } from '../../../../features/blogs/asynReducers/fetchAllBlogs';


const AllBlogs = () => {

  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogStore.allBlogs);
  console.log(blogs);

  useEffect(() => {
    dispatch(asyncFetchAllBlogs());
  }, [])

  return (
    <div>
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
            blogs.map(blog => <tr>
              <td><input type="checkbox" name="" id="" /></td>
              <td>{blog._id}</td>
              <td>{blog.title}</td>
              <td>{blog.short_description}</td>
              <td><i class="fa-solid fa-wrench"></i></td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllBlogs