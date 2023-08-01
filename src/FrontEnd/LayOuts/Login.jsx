import React from 'react'

const Login = () => {
    return (

        <div class="container d-flex justify-content-center align-items-center" >
            <div class="card p-4">
                <h3 class="mb-4 text-center">Login</h3>
                <form>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" class="form-control border border-primay" id="email" placeholder="Enter your email" />
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter your password" />
                    </div>
                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login