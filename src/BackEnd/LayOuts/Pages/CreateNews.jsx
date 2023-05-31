import React from 'react'

const CreateNews = () => {
    return (
        <div className=''>
            <h1 className="text-center">Create News</h1>
            <form className='w-75 m-auto'>
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row ">
                                    <div class="form-group col-lg-6 ">
                                        <label>News Title</label>
                                        <input type="text" class="form-control " placeholder="title" />
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>News Author</label>
                                        <input type="text" class="form-control" placeholder="author" />
                                    </div>
                                </div>
                              
                                <div class="form-group">
                                    <label>Description</label>
                                    <textarea className='form-control' name="" id="" cols="30" rows="6"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateNews