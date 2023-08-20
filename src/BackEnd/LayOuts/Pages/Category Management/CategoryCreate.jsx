import React from 'react'

const CategoryCreate = () => {
  return (
    <div className='container'>
      <h3 className='text-center'>Create Category</h3>
      <form action="">
        <div className="row">
          <div className="col-md-12 mb-3">
            <label className="form-label text-white">Category<span className="text-danger">*</span></label>
            <input className="form-control form-control-lg" name='name' type="text" placeholder="category name" />
          </div>
        </div>
        <div class="d-flex justify-content-center align-items-center">
          <button className='btn btn-primary w-25'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default CategoryCreate