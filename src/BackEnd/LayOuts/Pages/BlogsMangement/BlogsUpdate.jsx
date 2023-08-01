import React, { useEffect, useRef } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchBlog } from '../../../../features/blogs/asynReducers/fetchBlog';
import { useParams } from 'react-router-dom';
import { asyncUpdateBlog } from '../../../../features/blogs/asynReducers/updateBlog';
import { stripHtmlTags } from '../../../../Helper/helper';

const BlogsUpdate = () => {

  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogStore.blog);

  const shortDescriptionEditorRef = useRef(null);
  const descriptionEditorRef = useRef(null);

  const params = useParams();

  useEffect(() => {
    dispatch(asyncFetchBlog(params.id));
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append('id', params.id);

    if (window.confirm('Update blog?')) {
      const shortDescription = stripHtmlTags(shortDescriptionEditorRef.current?.getContent() ?? '');
      const description = stripHtmlTags(descriptionEditorRef.current?.getContent() ?? '');
      formData.append('short_description', shortDescription);
      formData.append('description', description);

      dispatch(asyncUpdateBlog(formData));
    }
  };



  return (
    <div className='container'>
      <form className='form_body' onSubmit={handleSubmit} action="">
        <div className="row bg-white">
          <div className="col-md-6 mb-3">
            <label className="form-label text-dark">Title<span className="text-danger">*</span></label>
            <input className="form-control form-control-lg" name='title' defaultValue={blog.title} type="text" placeholder="title" />
          </div>
          <div className="col-md-6 mb-3">
            <label className="form-label text-dark">Category<span className="text-danger">*</span></label>
            <select className="form-control form-control-lg" type="text">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="col-md-12 mb-3 ">
            <label className='form-label text-dark' >Image<span className="text-danger">*</span></label>
            <input type="file" name='image[]' multiple className="form-control" />
          </div>
          <div className="col-md-12 mb-3">
            <label className='form-label text-dark' >Short Description</label>
            <Editor
              name="short_description"
              onInit={(evt, editor) => shortDescriptionEditorRef.current = editor}
              initialValue={blog.short_description}
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
            {/* <textarea class="form-control" cols="10" rows="10"></textarea> */}
          </div>
          <div className="col-md-12 mb-3">
            <label className='form-label text-dark' >Description</label>
            <Editor
              name="description"
              onInit={(evt, editor) => descriptionEditorRef.current = editor}
              initialValue={blog.description}
              init={{
                height: 200,
                menubar: false,
                plugins: [
                  'advlist autolink lists link image charmap print preview anchor',
                  'searchreplace visualblocks code fullscreen',
                  'insertdatetime media table paste code help wordcount'
                ],
                toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
              }}
            />
            {/* <textarea className="form-control" name='description' cols="10" rows="10"></textarea> */}
          </div>
        </div>

        <div class="d-flex justify-content-center align-items-center">
          <button className='btn btn-primary w-25'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default BlogsUpdate