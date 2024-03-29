import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIVATE_ROUTES } from '../../config';
import ConfirmationAlert from '../../components/confirmationAlert';

const vendorDetailJawafa = () => {
  const navigate = useNavigate(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const routeHandler = () => {
    navigate(PRIVATE_ROUTES.vendorManageJawafa.createVendorJawafa.path);

  };
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
      {/*begin::Container*/}
      <div className=" container ">
        <div className="vendor-body">
          <div className="vendor-detail-btn edit-delete-form">
            <a href="#" data-toggle="modal" data-target="#exampleModal">
              <img src="assets/images/ic_delete_white.svg" onClick={handleShow} />
            </a>
            <a href="create-fleet.html">
              <img src="assets/images/ic_edit_white.svg" onClick={routeHandler}/>
            </a>
          </div>
          <div className="create-vendor-info">
            <form action="#" method="post">
              <div className="row">
                <div className="col-xl-5">
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Location Name" />
                  </div>	
                </div>
                <div className="col-xl-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group country-numbers">
                        <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="(617) 397 - 8483" name="fullname" autoComplete="off" />
                        <span className="country-code">
                          <img src="assets/images/053-canada.svg" /> +1
                        </span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group country-numbers">
                        <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="(617) 397 - 8483" name="fullname" autoComplete="off" />
                        <span className="country-code">
                          <img src="assets/images/053-canada.svg" /> +1
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <div className="form-group">
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Official Email" />
                  </div>	
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Address" />
                  </div>	
                </div>
                <div className="col-xl-5">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group our-country">
                        <select className="form-control">
                          <option>Ontario</option>
                          <option>Ontario</option>
                          <option>Ontario</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group our-country">
                        <select className="form-control">
                          <option>Toronto</option>
                          <option>Ontario</option>
                          <option>Ontario</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <div className="form-group">
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Facebook Page / Company Website" />
                  </div>	
                </div>
                <div className="col-xl-5">
                  <label className="r-u-owner my-owner">ARE YOU THE OWNER OR MANAGER OF THIS PLACE?*</label>
                  <div className="row c-vendor-checboxes">
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        I'm not the owner/manager
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        I'm the owner/manager
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5 mt-5">
                  <label className="label-country">Business Category</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Food * Pharma</option>
                      <option>Sole</option>
                      <option>Sole</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-5 mt-5">
                  <label className="label-country">Business Type</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Sole Proprietorship</option>
                      <option>Sole</option>
                      <option>Sole</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5 mb-5">
                  <label className="label-country">Company Name (SSM)</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>105015-k</option>
                      <option>105025-k</option>
                      <option>105035-k</option>
                    </select>
                  </div>
                </div>
                <div className="col-xl-5 mb-5">
                  <label className="label-country">Company Registration Number (SSM)</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>201901000005 (1312525-A</option>
                      <option>201901000005 (1312525-B</option>
                      <option>201901000005 (1312525-C</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <div className="row">
                    <div className="col-md-6">
                      <label className="label-country">Number of Outlets</label>
                      <div className="form-group country-names">
                        <select className="form-control">
                          <option>2 (TWO)</option>
                          <option>3 (THREE)</option>
                          <option>4 (FOUR)</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <label className="label-country">House delivery services?</label>
                      <div className="form-group country-names">
                        <select className="form-control">
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <label className="label-country">OPENING STATUS</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>This place is already open</option>
                      <option>Closed</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <label className="label-country">ALCOHOL</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Doesn't serve alcohol</option>
                      <option>Server alcohol</option>
                    </select>
                  </div>	
                </div>
                <div className="col-xl-5">
                  <label className="r-u-owner who-serve">WHO YOU SERVE</label>
                  <div className="row c-vendor-checboxes">
                    <div className="col-lg-2">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Devlivery
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 pickup">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Pickup
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 book-for-event">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Book for Event
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Din Inn
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Nightlife
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <label className="r-u-owner who-serve">MENU SERVICES</label>
                  <div className="row c-vendor-checboxes">
                    <div className="col-lg-3">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Breakfast
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 pickup">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Lunch
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 book-for-event">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Dinner
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Cafe
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Nightlife
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <label className="label-country">SEATING</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Seating Available</option>
                      <option>Not Available</option>
                    </select>
                  </div>	
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <label className="r-u-owner who-serve">PAYMENT MOTHER</label>
                  <div className="row c-vendor-checboxes">
                    <div className="col-lg-2">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        PayPal
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 book-for-event">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Credit Card
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        XP Wallet
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <div className="checkbox-inline">
                          <label className="checkbox checkbox-lg manager-checkbox">
                            <input type="checkbox" name="owner" />
                            <span />
                        Cash on Delivery
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <label className="label-country">CUISINES</label>
                  <div className="form-group country-names">
                    <select className="form-control">
                      <option>Arabian * Arabian *</option>
                      <option>Italian</option>
                    </select>
                  </div>	
                </div>
              </div>
              <div className="row">
                <div className="col-xl-5">
                  <label className="label-country">Timings</label>
                  <div className="form-group timing-container" id="timing-container-content create-vendor-timing">
                    <div className="row" id="who-serve-options">
                      <div className="col-sm-6 col-md-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg">
                              <input type="checkbox" name="owner" />
                              <span />
                          Monday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg">
                              <input type="checkbox" name="owner" />
                              <span />
                          Tuesday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-3 wednesday-label">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg">
                              <input type="checkbox" name="owner" />
                              <span />
                          Wednesday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-2 thursday-label">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg">
                              <input type="checkbox" name="owner" />
                              <span />
                          Thursday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg">
                              <input type="checkbox" name="owner" />
                              <span />
                          Friday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-2">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg">
                              <input type="checkbox" name="owner" />
                              <span />
                          Saturday
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-2 sunday-label">
                        <div className="form-group">
                          <div className="checkbox-inline">
                            <label className="checkbox checkbox-lg">
                              <input type="checkbox" name="owner" />
                              <span />
                          Sunday
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="time-label-schedule create-vendor-time-label">
                      <label className="label-country day-label">Monday</label>
                      <label className="label-time">12:00 AM</label>
                      <label className="label-time">09:00 PM</label>
                      <label className="mark-label">Mark this day as closed</label>
                      <span className="del-container">
                        <img src="assets/images/ic_delete.svg" alt="delete" />
                      </span>
                    </div>
                    <div className="time-label-schedule create-vendor-time-label">
                      <label className="label-country day-label">Tuesday</label>
                      <label className="label-time">12:00 AM</label>
                      <label className="label-time">09:00 PM</label>
                      <label className="mark-label">Mark this day as closed</label>
                      <span className="del-container">
                        <img src="assets/images/ic_delete.svg" alt="delete" />
                      </span>
                    </div>
                    <div className="time-label-schedule create-vendor-time-label">
                      <label className="label-country day-label">Wednesday</label>
                      <label className="label-time">12:00 AM</label>
                      <label className="label-time">09:00 PM</label>
                      <label className="mark-label">Mark this day as closed</label>
                      <span className="del-container">
                        <img src="assets/images/ic_delete.svg" alt="delete" />
                      </span>
                    </div>
                    <div className="time-label-schedule create-vendor-time-label">
                      <label className="label-country day-label">Thursday</label>
                      <label className="label-time">12:00 AM</label>
                      <label className="label-time">09:00 PM</label>
                      <label className="mark-label">Mark this day as closed</label>
                      <span className="del-container">
                        <img src="assets/images/ic_delete.svg" alt="delete" />
                      </span>
                    </div>
                    <div className="time-label-schedule create-vendor-time-label">
                      <label className="label-country day-label">Friday</label>
                      <label className="label-time">12:00 AM</label>
                      <label className="label-time">09:00 PM</label>
                      <label className="mark-label">Mark this day as closed</label>
                      <span className="del-container">
                        <img src="assets/images/ic_delete.svg" alt="delete" />
                      </span>
                    </div>
                    <div className="time-label-schedule create-vendor-time-label">
                      <label className="label-country day-label">Saturday</label>
                      <label className="label-time">12:00 AM</label>
                      <label className="label-time">09:00 PM</label>
                      <label className="mark-label">Mark this day as closed</label>
                      <span className="del-container">
                        <img src="assets/images/ic_delete.svg" alt="delete" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5">
                  <label className="label-country">Locations</label>
                  <div className="form-group location-div">
                    <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6 location-input" type="text" placeholder="Enter an address, so we can find this place faster..." name="location" autoComplete="off" />
                    <div className="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.344082631407!2d-123.1133149490098!3d49.28882477923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2s!4v1601402609000!5m2!1sen!2s" style={{border: 0, width: '100%'}} allowFullScreen width={600} height={450} frameBorder={0}>
                      </iframe>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default vendorDetailJawafa;