import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncFetchBlog } from '../../../../features/blogs/asynReducers/fetchBlog';
import { useParams } from 'react-router-dom';
import { asyncUpdateBlog } from '../../../../features/blogs/asynReducers/updateBlog';
import { stripHtmlTags } from '../../../../Helper/helper';
import { asyncFetchAllCategory } from '../../../../features/category/asynReducers/fetchAllcategory';


const BlogsUpdate = () => {

    const dispatch = useDispatch();
    const blog = useSelector((state) => state.blogStore.blog);
    const allCategories = useSelector((state) => state.categoryStore.allCategories);
    // console.log("singtle blog = ", blog);
    const [selectedCategory, setSelectedCategory] = useState([])

    const shortDescriptionEditorRef = useRef(null);
    const descriptionEditorRef = useRef(null);

    const params = useParams();

    useEffect(() => {
        dispatch(asyncFetchBlog(params.id));
        dispatch(asyncFetchAllCategory());
    }, [])

    useEffect(() => {
        let val = blog?.category?.map(i => i._id)
        setSelectedCategory(val)
    }, [blog])

    const addCat = (e) => {
        setSelectedCategory([...selectedCategory, e.target.value])
    }

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
        true ?
            <div className='container'>
                <h3 className='text-center'>Blogs Update</h3>
                <form className='form_body' onSubmit={handleSubmit} action="">
                    <div className="row bg-white">
                        <div className="col-md-6 mb-3">
                            <label className="form-label text-dark">Title<span className="text-danger">*</span></label>
                            <input className="form-control form-control-lg" name='title' defaultValue={blog.title} type="text" placeholder="title" />
                        </div>
                        <div className="col-md-6 mb-3">
                            <label className="form-label text-dark">Category<span className="text-danger">*</span></label>
                            <select style={{ height: "120px" }} value={selectedCategory} onChange={(e) => addCat(e)} className="form-control form-control-lg" name='category' type="text" multiple>
                                {
                                    allCategories?.map(cat => <option key={cat._id} value={cat._id}>{cat.name}</option>)
                                }
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

                    <div className="d-flex justify-content-center align-items-center">
                        <button className='btn btn-primary w-25'>Submit</button>
                    </div>
                </form>
            </div>
            : <div>loading...</div>
    )
}

export default BlogsUpdate