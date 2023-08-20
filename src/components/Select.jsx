import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
const baseURL = "http://127.0.0.1:8000/api/books/";

const Select = () => {

  const [datas, setDatas] = useState([])
  const [single, setSingle] = useState({})
  const [err, seterr] = useState({})

  const fetchData = async () => {
    try {
      const response = await axios.get(baseURL);
      setDatas(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const singlefetchData = async (id) => {
    try {
      const response = await axios.get(`${baseURL}${id}/`);
      setSingle(response.data);
    } catch (error) {
      console.error('Error Singlefetcing data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  const handleEdit = (e, id) => {
    e.preventDefault();
    singlefetchData(id);
  }
  const error = {
    id: ["A valid integer is required."],
    book_name: ["This field may not be blank."],
    author: ["This field may not be blank."]
  };

  const check = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (!single.id) {
      try {
        await axios.post(baseURL, formData);
        e.target.reset();
        fetchData();
        seterr("")
      } catch (error) {
        seterr(error.response.data);
        console.error('Error creating data:', error);
      }
    } else {
      try {
        await axios.put(`${baseURL}${single.id}/`, formData);
        fetchData();
      } catch (error) {
        console.error('updating data:', error);
      }
    }
  }

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`${baseURL}${id}/`);
      setSingle(response.data);
      fetchData();
    } catch (error) {
      console.error('Error delete data:', error);
    }
  };

  return (
    <div className='b'>
      <form className="w-25 h-auto mx-auto p-4 border mb-4 border-primary" onSubmit={check}>
        <div className="mb-3">
          <label className="form-label">ID</label>
          <input type="number" defaultValue={single.id} className="form-control" name='id' />
          {err.id && <span className='text-danger'>{err.id.join(', ')}</span> }
        </div>

        <div className="mb-3">
          <label className="form-label">Title</label>
          <input type="text" defaultValue={single.book_name} className="form-control" name='book_name' />
          {err.book_name && <span className='text-danger'>{err.book_name.join(', ')}</span> }

        </div>
        <div className="mb-3">
          <label className="form-label">Author</label>
          <input type="text" defaultValue={single.author} className="form-control" name='author' />
          {err.author && <span className='text-danger'>{err.author.join(', ')}</span> }

        </div>
        <div className="mb-3">
          <label className="form-label">Category</label>
          <select className="form-select" defaultValue={single.category} name='category' >
          {err.category && <span className='text-danger'>{err.category.join(', ')}</span> }

            <option value="Mystery">Mystery</option>
            <option value="Thriller">Thriller</option>
            <option value="Sci-fi">Sci-fi</option>
            <option value="Humor">Humor</option>
            <option value="Horror">Horror</option>
            <option value="Education">Education</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <table className="table table-bordered mx-auto" style={{ "width": "70%" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Book Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>First Publication</th>
            <th>Last Publication</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            datas.map((data) => <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.book_name}</td>
              <td>{data.author}</td>
              <td>{data.category}</td>
              <td>{data.first_sub}</td>
              <td>{data.last_sub}</td>
              <td>
                <a href=""><button onClick={(e) => handleEdit(e, data.id)} type="submit" className="btn btn-primary btn-sm me-2">Edit</button></a>
                <a href=""><button type="submit" onClick={(e) => { handleDelete(e, data.id) }} className="btn btn-danger btn-sm me-2">Delete</button></a>
              </td>
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
export default Select