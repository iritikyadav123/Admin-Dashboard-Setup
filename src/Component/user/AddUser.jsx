import React from 'react'

function AddUser() {
    return (
        <>

            <div className="wrapper">
                {/* <!-- Content Wrapper. Contains page content --> */}
                <div className="content-wrapper">
                    {/* <!-- Content Header (Page header) --> */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Add User</h1>
                                </div>
                               
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                                        <li className="breadcrumb-item active">Add User</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /.content-header --> */}

                    {/* <!-- Main content --> */}
                    <div className="content">
                        <div className="container">
                            <div className='row'>
                                <div className="col-md-2"></div>
                                <div className="col-md-8">
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">Quick Example</h3>
                                        </div>
                                        {/* <!-- /.card-header -->
                                <!-- form start --> */}
                                        <form>
                                            <div className="card-body">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                <div className="form-group">
                                                    <label for="exampleInputFile">File input</label>
                                                    <div className="input-group">
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" id="exampleInputFile" />
                                                            <label className="custom-file-label" for="exampleInputFile">Choose file</label>
                                                        </div>
                                                        <div className="input-group-append">
                                                            <span className="input-group-text">Upload</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                                                </div>
                                            </div>
                                            {/* <!-- /.card-body --> */}

                                            <div className="card-footer">
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-md-2"></div>
                            </div>
                            {/* <!-- /.card -- */}
                        </div>
                    </div>
                    {/* <!-- /.content --> */}
                </div>
                {/* <!-- /.content-wrapper --> */}



            </div>
        </>
    )
}

export default AddUser