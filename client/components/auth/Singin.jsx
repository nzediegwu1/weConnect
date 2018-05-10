import React from "react";

const SigninForm = () => {
    return (
        <div>
            <br />
            <br />
            <div className="container my-5">
                <div className="row justify-content-center">
                    <div className="col-md-4 col-lg-4 col-xs-4">
                        <div className="card bg-primary text-center card-form">
                            <div className="card-body">
                                <h3 className="text-white">Sign In</h3>
                                <h6 className="font-weight-light text-white">Enter your login details</h6>
                                <form>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-sm" placeholder="Username" />
                                    </div>

                                    <div className="form-group">
                                        <input type="password" className="form-control form-control-sm" placeholder="Password" />
                                    </div>

                                    <button className="btn btn-warning btn-block">
                                        <i className="fa fa-sign-in" aria-hidden="true"></i> Sign In</button>
                                </form>
                                <hr />
                                <h6 className="text-white">Forgotten your password?
                            <a className="text-white" href="#">Recover it</a>
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default SigninForm;