import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            showMoreInfo : false
        };
    }

    moreInfoToggle =() =>{
        this.setState ({ showMoreInfo : !this.state.showMoreInfo});
    }

    render() {
 const { showMoreInfo } = this.state;
        return (
            <React.Fragment>
                <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
                    {/*begin::Content body*/}
                    <div className="d-flex flex-column-fluid flex-center">
                        {/*begin::Signin*/}
                        <div className="login-form login-signin">
                        {/*begin::Form*/}
                        <img src="assets/images/ic-logo.svg" alt="logo" className="envision-red-logo" />
                        <form className="form" noValidate="novalidate" id="kt_login_signin_form">
                            <div className="pb-7 pt-lg-0 pt-5">
                            <h3 className="signup-title">Want to be a EnnVisions merchant? (CANADA)</h3>
                            <p className="gilroy-regular signup-leave-text">Leave your restaurant details here and we will be in touch shortly.</p>
                            </div>
                            {/*end::Title*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="Location Name" name="fullname" autoComplete="off" />
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="First Name" name="fullname" autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="Last Name" name="fullname" autoComplete="off" />
                                </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group country-numbers">
                                <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="(617) 397 - 8483" name="fullname" autoComplete="off" />
                                <span className="country-code"><img src="assets/images/053-canada.svg" alt="" /> +1</span>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group country-numbers">
                                <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="(617) 397 - 8483" name="fullname" autoComplete="off" />
                                <span className="country-code"><img src="assets/images/053-canada.svg" alt="" /> +1</span>
                                </div>
                            </div>
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="email" placeholder="Official Email" name="email" autoComplete="off" />
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="Address" name="address" autoComplete="off" />
                            </div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="row">
                            <div className="col-md-6">
                                <label className="label-country">State</label>
                                <div className="form-group country-names">
                                <select className="form-control">
                                    <option>Ontario</option>
                                    <option>Ontario</option>
                                    <option>Ontario</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <label className="label-country">City</label>
                                <div className="form-group country-names">
                                <select className="form-control">
                                    <option>Toronto</option>
                                    <option>Ontario</option>
                                    <option>Ontario</option>
                                </select>
                                </div>
                            </div>
                            </div>
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="Facebook Page / Company Website" name="address" autoComplete="off" />
                            </div>
                            <div className="r-u-owner">ARE YOU THE OWNER OR MANAGER OF THIS PLACE?*</div>
                            {/*end::Form group*/}
                            {/*begin::Form group*/}
                            <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                <div className="checkbox-inline">
                                    <label className="checkbox checkbox-lg">
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
                                    <label className="checkbox checkbox-lg">
                                    <input type="checkbox" name="owner" />
                                    <span />
                                    I'm the owner/manager
                                    </label>
                                </div>
                                </div>
                            </div>
                            </div>
                            <label className="label-country">Business Category</label>
                            <div className="form-group country-names">
                            <select className="form-control">
                                <option>Food * Pharma</option>
                                <option>Sole</option>
                                <option>Sole</option>
                            </select>
                            </div>
                            <label className="label-country">Business Type</label>
                            <div className="form-group country-names">
                            <select className="form-control">
                                <option>Sole Proprietorship</option>
                                <option>Sole</option>
                                <option>Sole</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="Company Name (SSM)" name="address" autoComplete="off" />
                            </div>
                            <div className="form-group">
                            <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6" type="text" placeholder="Company Registration Number (SSM)" name="address" autoComplete="off" />
                            </div>
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
                            <label className="label-country">OPENING STATUS</label>
                            <div className="form-group country-names">
                            <select className="form-control">
                                <option>This place is already open</option>
                                <option>This place is already open</option>
                            </select>
                            </div>
                            <div className="form-group">
                            <button type="button" 
                            id="add-more-btn" 
                            className="btn btn-light-primary font-weight-bolder font-size-h6 px-8 py-4"
                            onClick={()=>this.moreInfoToggle()}
                            >
                                + Add more info (optional)
                                </button>
                                { showMoreInfo ?
                                <div>
                                    <label className="label-country">Locations</label>
                                    <div className="form-group location-div">
                                        <input className="form-control form-control-solid h-auto py-4 px-6 rounded-lg font-size-h6 location-input" type="text" placeholder="Enter an address, so we can find this place faster..." name="location" autoComplete="off" />
                                        <div className="map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.344082631407!2d-123.1133149490098!3d49.28882477923052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486719d24e2e021%3A0xb7057fe085c86109!2sCanada%20Place!5e0!3m2!1sen!2s!4v1601402609000!5m2!1sen!2s" width={600} height={450} frameBorder={0} style={{border: 0, width: '100%'}} title="maps" allowFullScreen />
                                        </div>
                                    </div>
                                    <label className="label-country">Characteristics</label>
                                    <br /><br />
                                    <label className="label-country">ALCOHOL</label>
                                    <div className="form-group country-names">
                                        <select className="form-control">
                                        <option value="dont-serve">Doesn't serve alcohol</option>
                                        <option value="serve">Doesn't serve alcohol</option>
                                        </select>
                                    </div>
                                    <label className="label-country">WHO YOU SERVE</label>
                                    <div className="row" id="who-serve-options">
                                        <div className="col-sm-6 col-md-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Devlivery
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
                                                Pickup
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Book for Event
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Din Inn
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
                                                Nightlife
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <label className="label-country">MENU SERVICES</label>
                                    <div className="row" id="who-serve-options">
                                        <div className="col-sm-6 col-md-2">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Breakfast
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
                                                Lunch
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Dinner
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Cafe
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
                                                Nightlife
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <label className="label-country">SEATING</label>
                                    <div className="form-group country-names">
                                        <select className="form-control">
                                        <option value="Seating">Seating Available</option>
                                        <option value="Not-Available">Seating Not Available</option>
                                        </select>
                                    </div>
                                    <label className="label-country">PAYMENT MOTHER</label>
                                    <div className="row" id="who-serve-options">
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                PayPal
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Credit Card
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                XP Wallet
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                        <div className="form-group">
                                            <div className="checkbox-inline">
                                            <label className="checkbox checkbox-lg">
                                                <input type="checkbox" name="owner" />
                                                <span />
                                                Cash on Delivery
                                            </label>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    <label className="label-country">CUISINES</label>
                                    <div className="form-group country-names">
                                        <select className="form-control">
                                        <option value="Arabian*">Arabian* Arabian*</option>
                                        <option value="Not-arabian">Non-Arabian*</option>
                                        </select>
                                    </div>
                                    <label className="label-country">Timings</label>
                                    <div className="form-group timing-container" id="timing-container-content">
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
                                        <div className="col-sm-6 col-md-3">
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
                                        <div className="col-sm-6 col-md-3">
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
                                        <div className="col-sm-6 col-md-2">
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
                                        <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <label className="label-country">Start Time</label>
                                            <div className="form-group country-names country-time-select">
                                            <select className="form-control">
                                                <option value="12:00">12:00 AM</option>
                                                <option value="01:00">01:00 AM</option>
                                                <option value="02:00">02:00 AM</option>
                                                <option value="03:00">03:00 AM</option>
                                                <option value="04:00">04:00 AM</option>
                                                <option value="05:00">05:00 AM</option>
                                                <option value="06:00">06:00 AM</option>
                                                <option value="07:00">07:00 AM</option>
                                                <option value="08:00">08:00 AM</option>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 AM</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-4">
                                            <label className="label-country">Start Time</label>
                                            <div className="form-group country-names country-time-select">
                                            <select className="form-control">
                                                <option value="12:00">12:00 AM</option>
                                                <option value="01:00">01:00 AM</option>
                                                <option value="02:00">02:00 AM</option>
                                                <option value="03:00">03:00 AM</option>
                                                <option value="04:00">04:00 AM</option>
                                                <option value="05:00">05:00 AM</option>
                                                <option value="06:00">06:00 AM</option>
                                                <option value="07:00">07:00 AM</option>
                                                <option value="08:00">08:00 AM</option>
                                                <option value="09:00">09:00 AM</option>
                                                <option value="10:00">10:00 AM</option>
                                                <option value="11:00">11:00 AM</option>
                                                <option value="12:00">12:00 AM</option>
                                            </select>
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-4">
                                            <label className="label-country">&nbsp;</label>
                                            <button type="button" className="btn add-time-btn">ADD TIME</button>
                                        </div>
                                        </div>
                                        <div className="time-label-schedule">
                                        <label className="label-country day-label">Monday</label>
                                        <label className="label-time">12:00 AM</label>
                                        <label className="label-time">09:00 PM</label>
                                        <label className="mark-label">Mark this day as closed</label>
                                        <span className="del-container">
                                            <img src="assets/images/ic_delete.svg" alt="delete" />
                                        </span>
                                        </div>
                                        <div className="time-label-schedule">
                                        <label className="label-country day-label">Tuesday</label>
                                        <label className="label-time">12:00 AM</label>
                                        <label className="label-time">09:00 PM</label>
                                        <label className="mark-label">Mark this day as closed</label>
                                        <span className="del-container">
                                            <img src="assets/images/ic_delete.svg" alt="delete" />
                                        </span>
                                        </div>
                                        <div className="time-label-schedule">
                                        <label className="label-country day-label">Wednesday</label>
                                        <label className="label-time">12:00 AM</label>
                                        <label className="label-time">09:00 PM</label>
                                        <label className="mark-label">Mark this day as closed</label>
                                        <span className="del-container">
                                            <img src="assets/images/ic_delete.svg" alt="delete" />
                                        </span>
                                        </div>
                                    </div>
                                    </div>: null}
                            </div> 
                            <div className="form-group">
                            <button type="button" 
                            id="sign-submit-btn"
                             className="btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 mr-4">
                                 SUBMIT
                                 </button>
                            </div>
                            {/*end::Action*/}
                        </form>
                        <div className="privacy-text">By proceeding, I agree that you can collect, use and disclose the information provided by me in accordance with your <Link to="">Privacy Policy</Link> which I have read and understand</div>
                        {/*end::Form*/}
                        </div>
                        {/*end::Signin*/}  
                    </div>
                    </div>
                        
            </React.Fragment>
        )
    }
}

export default Content;