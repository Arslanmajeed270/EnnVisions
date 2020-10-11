import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div id="kt_header" className="header  header-fixed ">
        {/*begin::Container*/}
        <div className=" container-fluid  d-flex align-items-stretch justify-content-between">
            {/*begin::Header Menu Wrapper*/}
            <div className="header-menu-wrapper header-menu-wrapper-left" id="kt_header_menu_wrapper">
            {/*begin::Header Menu*/}
            <div id="kt_header_menu" className="header-menu header-menu-mobile  header-menu-layout-default ">
                {/*begin::Header Nav*/}
                {/*end::Header Nav*/}
            </div>
            {/*end::Header Menu*/}
            </div>
            {/*end::Header Menu Wrapper*/}
            {/*begin::Topbar*/}
            <div className="topbar">
  {/*begin::Search*/}
  <div className="dropdown" id="kt_quick_search_toggle">
    {/*begin::Toggle*/}
    <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
      <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
        <span className="svg-icon svg-icon-xl svg-icon-primary">
          <img src="assets/images/ic_search.svg" alt=".." />
        </span>
      </div>
    </div>
  </div>
  <div className="dropdown" id="kt_quick_search_toggle">
    {/*begin::Toggle*/}
    <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
      <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
        <span className="svg-icon svg-icon-xl svg-icon-primary">
          <img src="assets/images/ic_notification.svg" alt="  " />
        </span>
      </div>
    </div>
  </div>
  <div className="dropdown">
    {/*begin::Toggle*/}
    <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
      <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
        <img className="h-20px w-25px rounded-sm" src="assets/images/pakistan.png" alt="" />
      </div>
    </div>
    {/*end::Toggle*/}
    {/*begin::Dropdown*/}
    <div className="dropdown-menu p-0 m-0 dropdown-menu-anim-up dropdown-menu-sm dropdown-menu-right">
      {/*begin::Nav*/}
      <ul className="navi navi-hover py-4">
        {/*begin::Item*/}
        <li className="navi-item">
          <Link to="#" className="navi-link">
            <span className="symbol symbol-20 mr-3">
              <img src="assets/media/svg/flags/226-united-states.svg" alt="" />
            </span>
            <span className="navi-text">English</span>
          </Link>
        </li>
        {/*end::Item*/}
        {/*begin::Item*/}
        <li className="navi-item active">
          <Link to="#" className="navi-link">
            <span className="symbol symbol-20 mr-3">
              <img src="assets/media/svg/flags/128-spain.svg" alt="" />
            </span>
            <span className="navi-text">Spanish</span>
          </Link>
        </li>
        {/*end::Item*/}
        {/*begin::Item*/}
        <li className="navi-item">
          <Link to="#" className="navi-link">
            <span className="symbol symbol-20 mr-3">
              <img src="assets/media/svg/flags/162-germany.svg" alt="" />
            </span>
            <span className="navi-text">German</span>
          </Link>
        </li>
        {/*end::Item*/}
        {/*begin::Item*/}
        <li className="navi-item">
          <Link to="#" className="navi-link">
            <span className="symbol symbol-20 mr-3">
              <img src="assets/media/svg/flags/063-japan.svg" alt="" />
            </span>
            <span className="navi-text">Japanese</span>
          </Link>
        </li>
        {/*end::Item*/}
        {/*begin::Item*/}
        <li className="navi-item">
          <Link to="#" className="navi-link">
            <span className="symbol symbol-20 mr-3">
              <img src="assets/media/svg/flags/195-france.svg" alt="" />
            </span>
            <span className="navi-text">French</span>
          </Link>
        </li>
        {/*end::Item*/}
      </ul>
      {/*end::Nav*/}
    </div>
    {/*end::Dropdown*/}
  </div>
  {/*end::Languages*/}
  {/*begin::User*/}
  <div className="topbar-item">
    <div className="btn btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2" id="kt_quick_user_toggle">
      <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">Hi,</span>
      <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">Adnan</span>
      <span className="symbol symbol-lg-35 symbol-25 symbol-light-success">
        <span className="symbol-label font-size-h5 font-weight-bold">S</span>
      </span>
    </div>
  </div>
  {/*end::User*/}
</div>
            {/*end::User*/}
          
            {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
        </div>
        
        )
    }
}

export default Header;