import React, { Component } from 'react';

class AddEdit extends Component {
    render() {
        return (
            <React.Fragment>
                {/*begin::Content*/}
                <div className="content  d-flex flex-column flex-column-fluid" id="kt_content">
                {/*begin::Subheader*/}
                <div className="subheader py-2 py-lg-4  subheader-solid " id="kt_subheader">
                    <div className=" container-fluid  d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
                    {/*begin::Info*/}
                    <div className="d-flex align-items-center flex-wrap mr-2">
                        {/*begin::Page Title*/}
                        <h5 className="dark-text main-breadcrumb gilroy-semibold mt-2 mb-2 mr-5">
                        DASHBOARD
                        </h5>
                        <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
                        <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">		NEW ROLES
                        </span>
                        {/*end::Actions*/}
                    </div>
                    </div>
                </div>
                {/*end::Subheader*/}
                {/*begin::Entry*/}
                <div className="d-flex flex-column-fluid">
                    {/*begin::Container*/}
                    <div className=" container ">
                    {/*begin::Dashboard*/}
                    {/*begin::Row*/}
                    <div className="add-edit-role dash-body">
                        <div className="row">
                        <div className="col-md-2">
                            <img src="assets/images/035-boy-15.svg" alt="" />
                        </div>
                        <div className="col-md-10">
                            <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ROLE NAME" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="DISPLAY NAME" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="COMMISSION" />
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-12">
                                <div className="form-group">
                                <textarea placeholder="Role Description" rowSpan={5} className="form-control" defaultValue={""} />
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <h1 className="add-edit-permission">ROLE PERMISSIONS</h1>
                        <div className="row">
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    CREATE ADMIN
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    VIEW ADMIN
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    UPDATE ADMIN
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    DELETE ADMIN
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    CREATE FLEET
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    VIEW FLEET
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    UPDATE FLEET
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    DELETE FLEET
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    CREATE FLEET DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    VIEW FLEET DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    UPDATE FLEET DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    UPDATE FLEET DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    CREATE VENDOR
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    VIEW VENDOR
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    UPDATE VENDOR
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    DELETE VENDOR
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    CREATE VENDOR DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    VIEW VENDOR DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    UPDATE VENDOR DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <div className="col-sm-6 col-md-3">
                            <div className="form-group">
                                <div className="checkbox-inline">
                                <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="Checkboxes3_1" />
                                    <span />
                                    DELETE VENDOR DRIVER
                                </label>
                                </div>
                            </div>
                            </div>
                            <button type="button" id="kt_login_signin_submit" className="gilroy-medium btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3 role-submit">SUBMIT</button>
                        </div>
                        </div>
                    </div>   		
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

export default AddEdit;