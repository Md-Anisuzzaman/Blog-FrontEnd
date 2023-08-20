import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchSingleCategory } from '../../../../features/category/asynReducers/fetchCategory';
import { useParams } from 'react-router-dom';
import { asyncUpdateCategory } from '../../../../features/category/asynReducers/updateCategory';
import { useState } from 'react';

const CategoryUpdate = () => {

  const dispatch = useDispatch();
  const singleCategory = useSelector((state) => state.categoryStore.category);

  const params = useParams();

  useEffect(() => {
    dispatch(asyncFetchSingleCategory(params.id));
  }, [])

  const handleSubmit = (e) => {
    if (window.confirm('Update Category?')) {
      const formData = new FormData(e.target);
      formData.append('id', params.id);
      dispatch(asyncUpdateCategory(formData))
    }
  }

  return (
    load ? (<div className="container">
      <div className='container'>
        <h3 className='text-center'>Category Update</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="row bg-white">
            <div className="col-md-12 mb-3">
              <label className="form-label text-dark">Ctegory Name<span className="text-danger">*</span></label>
              <input className="form-control form-control-lg" name='name' defaultValue={singleCategory.name} type="text" placeholder="category name" />
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <button className='btn btn-primary w-25'>Submit</button>
          </div>
        </form>
      </div>
    </div>
    ) : <></>
  )
}

export default CategoryUpdate 