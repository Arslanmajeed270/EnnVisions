import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserRoles extends Component {
    render() {
        return (
            <React.Fragment>
                {/*begin::Header*/}
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
                                {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
                                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                    <rect x={0} y={0} width={24} height={24} />
                                    <path d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                                    <path d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z" fill="#000000" fillRule="nonzero" />
                                </g>
                                </svg>
                                {/*end::Svg Icon*/}
                            </span>
                            </div>
                        </div>
                        </div>
                        <div className="dropdown">
                        {/*begin::Toggle*/}
                        <div className="topbar-item" data-toggle="dropdown" data-offset="10px,0px">
                            <div className="btn btn-icon btn-clean btn-dropdown btn-lg mr-1">
                            <img className="h-20px w-20px rounded-sm" src="assets/media/svg/flags/226-united-states.svg" alt="" />
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
                    {/*end::Topbar*/}
                    </div>
                    {/*end::Container*/}
                </div>
                {/*end::Header*/}
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
                        {/*end::Page Title*/}
                        {/*begin::Actions*/}
                        <div className="subheader-separator subheader-separator-ver mt-2 mb-2 mr-4 bg-gray-200" />
                        <span className="gilroy-medium inactive-breadcrumb semi-dark-text text-muted font-weight-bold mr-4">USER ROLES</span>
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
                        <div className="row">
                        <div className="dash-body">
                            <div className="page-3-table">
                            <table className="table">
                                <thead className="user-thead gilroy-semibold">
                                <tr>
                                    <th scope="col" className="role-type">ROLE TYPE</th>
                                    <th scope="col" className="role-detail">ROLE DETAIL</th>
                                    <th scope="col" className="role-comm">COMMISSION</th>
                                    <th scope="col" className="role-action">RATING</th>
                                    <th scope="col" className="role-action">ACTION</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td  className="user-p">
                                    <img src="assets/images/001-boy.svg" alt="" />
                                    <span className="user-name">SUPER ADMIN</span>
                                    </td>
                                    <td className="user-message">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</td>
                                    <td className="comm-percentage">1%</td>
                                    <td className="rating">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    </td>
                                    <td className="action-btn">
                                    <button type="button" className="btn btn-active">ACTIVE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="user-p"> 
                                    <img src="assets/images/018-girl-9.svg" alt="" />
                                    <span className="user-name">ADMIN</span>
                                    </td>
                                    <td className="user-message">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</td>
                                    <td className="comm-percentage">1%</td>
                                    <td className="rating">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    </td>
                                    <td className="action-btn">
                                    <button type="button" className="btn btn-de-active">DEACTIVE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="user-p">
                                    <img src="assets/images/035-boy-15.svg" alt="" />
                                    <span className="user-name">FLEET</span>
                                    </td>
                                    <td className="user-message">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</td>
                                    <td className="comm-percentage">1%</td>
                                    <td className="rating">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    </td>
                                    <td className="action-btn">
                                    <button type="button" className="btn btn-active">ACTIVE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="user-p">
                                    <img src="assets/images/001-boy.svg" alt="" />
                                    <span className="user-name">VENDOR</span>
                                    </td>
                                    <td className="user-message">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</td>
                                    <td className="comm-percentage">1%</td>
                                    <td className="rating">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    </td>
                                    <td className="action-btn">
                                    <button type="button" className="btn btn-active">ACTIVE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="user-p">
                                    <img src="assets/images/018-girl-9.svg" alt="" />
                                    <span className="user-name">LOCATION MANAGER</span>
                                    </td>
                                    <td className="user-message">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</td>
                                    <td className="comm-percentage">1%</td>
                                    <td className="rating">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    </td>
                                    <td className="action-btn">
                                    <button type="button" className="btn btn-active">ACTIVE</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td  className="user-p">
                                    <img src="assets/images/035-boy-15.svg" alt="" />
                                    <span className="user-name">DATA ANALYST</span>
                                    </td>
                                    <td className="user-message">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod</td>
                                    <td className="comm-percentage">1%</td>
                                    <td className="rating">
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    <i className="fa fa-star" aria-hidden="true" />
                                    </td>
                                    <td className="action-btn">
                                    <button type="button" className="btn btn-active">ACTIVE</button>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
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

export default UserRoles;