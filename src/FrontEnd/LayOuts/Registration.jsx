import React from 'react'

const Registration = () => {
    return (

        <div class="container d-flex justify-content-center align-items-center" >
            <div class="card p-4">
                <h3 class="mb-4 text-center">Registration</h3>
                <form>
                    <div class="form-group">
                        <label for="email">Username</label>
                        <input type="text" class="form-control border border-primay" id="email" placeholder="Enter your name" />
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control border border-primay" id="email" placeholder="Enter your email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <div class="form-group">
                        <label for="password">Re - Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your re - password" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Registration