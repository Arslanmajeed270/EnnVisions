import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';
import ConfirmationAlert from '../../components/confirmationAlert';

const DispatcherDetail = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex flex-column-fluid">
      <ConfirmationAlert
        show={show}
        description={
          ' Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna'
        }
        handleSave={handleClose}
        handleClose={handleClose}
      />
      {/* begin::Container */}
      <div className=" container ">
        {/* begin::Dashboard */}
        {/* begin::Row */}
        <div className="row">
          <div className="dash-body">
            <div className="edit-delete-form">
              <span style={{ cursor: 'pointer', paddingRight: '5px' }}>
                <img
                  onClick={handleShow}
                  src="/assets/images/ic_delete_white.svg"
                  alt=""
                />
              </span>
              <span style={{ cursor: 'pointer' }}>
                <img
                  onClick={() =>
                    navigate(
                      PRIVATE_ROUTES.dispatcherManage.editDispatcher.path,
                    )
                  }
                  src="/assets/images/ic_edit_white.svg"
                  alt=""
                />
              </span>
            </div>
            <div
              className="modal fade delete-admin-modal"
              id="exampleModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <img src="/assets/images/ic-logo.svg" alt="logo" />
                  </div>
                  <div className="modal-body">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary">
                      YES!
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      CANCEL
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="view-fleet-form">
              <form action="#" method="post">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Company name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="+92 3008134076"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Company mailing address"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">Country</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Pakistan</option>
                        <option>USA</option>
                        <option>UK</option>
                        <option>SA</option>
                        <option>UAE</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">State</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>Punjab</option>
                        <option>Sindh</option>
                        <option>KPK</option>
                        <option>AJK</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Zip code"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Registration Number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control upload"
                        onChange="readURL(this);"
                        id="file-upload"
                        aria-describedby="emailHelp"
                        placeholder="Insurance (Photo)"
                      />
                      <div>
                        <img id="blah" src="#" alt="" />
                      </div>
                      <div className="fakefile">
                        <span className="placeholder" />
                        <input className="form-control" placeholder="review" />
                        <span className="in-riview">IN REIVEW</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="License Expiry Date"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="file"
                        className="form-control upload"
                        onChange="readURL(this);"
                        id="file-upload"
                        aria-describedby="emailHelp"
                        placeholder="Insurance (Photo)"
                      />
                      <div>
                        <img alt="" id="blah" src="#" />
                      </div>
                      <div className="fakefile">
                        <span className="placeholder" />
                        <input
                          className="form-control"
                          placeholder="complete"
                        />
                        <span className="complete">IN REIVEW</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Insurance Expiry Date"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Vehicle Type*
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>EV Go, EV PLUS, EV BUSINESS</option>
                        <option>Sindh</option>
                        <option>KPK</option>
                        <option>AJK</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="exampleFormControlInput1">
                        Company Share
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="20%"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DispatcherDetail;
