import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div id="kt_quick_panel" className="offcanvas offcanvas-right pt-5 pb-10">
      {/* begin::Header */}
      <div className="offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5">
        <ul
          className="nav nav-bold nav-tabs nav-tabs-line nav-tabs-line-3x nav-tabs-primary flex-grow-1 px-10"
          role="tablist"
        >
          <li className="nav-item">
            <Link
              className="nav-link active"
              data-toggle="tab"
              to="#kt_quick_panel_logs"
            >
              Audit Logs
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              data-toggle="tab"
              to="#kt_quick_panel_notifications"
            >
              Notifications
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              data-toggle="tab"
              to="#kt_quick_panel_settings"
            >
              Settings
            </Link>
          </li>
        </ul>
        <div className="offcanvas-close mt-n1 pr-5">
          <Link
            to="#"
            className="btn btn-xs btn-icon btn-light btn-hover-primary"
            id="kt_quick_panel_close"
          >
            <i className="ki ki-close icon-xs text-muted" />
          </Link>
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Content */}
      <div className="offcanvas-content px-10">
        <div className="tab-content">
          {/* begin::Tabpane */}
          <div
            className="tab-pane fade show pt-3 pr-5 mr-n5 active"
            id="kt_quick_panel_logs"
            role="tabpanel"
          >
            {/* begin::Section */}
            <div className="mb-15">
              <h5 className="font-weight-bold mb-5">System Messages</h5>
              {/* begin: Item */}
              <div className="d-flex align-items-center flex-wrap mb-5">
                <div className="symbol symbol-50 symbol-light mr-5">
                  <span className="symbol-label">
                    <img
                      src="assets/media/svg/misc/006-plurk.svg"
                      className="h-50 align-self-center"
                      alt=""
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    Top Authors
                  </Link>
                  <span className="text-muted font-weight-bold">
                    Most Successful Fellas
                  </span>
                </div>
                <span className="btn btn-sm btn-light font-weight-bolder py-1 my-lg-0 my-2 text-dark-50">
                  +82$
                </span>
              </div>
              {/* end: Item */}
              {/* begin: Item */}
              <div className="d-flex align-items-center flex-wrap mb-5">
                <div className="symbol symbol-50 symbol-light mr-5">
                  <span className="symbol-label">
                    <img
                      src="assets/media/svg/misc/015-telegram.svg"
                      className="h-50 align-self-center"
                      alt=""
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    Popular Authors
                  </Link>
                  <span className="text-muted font-weight-bold">
                    Most Successful Fellas
                  </span>
                </div>
                <span className="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">
                  +280$
                </span>
              </div>
              {/* end: Item */}
              {/* begin: Item */}
              <div className="d-flex align-items-center flex-wrap mb-5">
                <div className="symbol symbol-50 symbol-light mr-5">
                  <span className="symbol-label">
                    <img
                      src="assets/media/svg/misc/003-puzzle.svg"
                      className="h-50 align-self-center"
                      alt=""
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    New Users
                  </Link>
                  <span className="text-muted font-weight-bold">
                    Most Successful Fellas
                  </span>
                </div>
                <span className="btn btn-sm btn-light font-weight-bolder  my-lg-0 my-2 py-1 text-dark-50">
                  +4500$
                </span>
              </div>
              {/* end: Item */}
              {/* begin: Item */}
              <div className="d-flex align-items-center flex-wrap mb-5">
                <div className="symbol symbol-50 symbol-light mr-5">
                  <span className="symbol-label">
                    <img
                      src="assets/media/svg/misc/005-bebo.svg"
                      className="h-50 align-self-center"
                      alt=""
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    Active Customers
                  </Link>
                  <span className="text-muted font-weight-bold">
                    Most Successful Fellas
                  </span>
                </div>
                <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                  +4500$
                </span>
              </div>
              {/* end: Item */}
              {/* begin: Item */}
              <div className="d-flex align-items-center flex-wrap">
                <div className="symbol symbol-50 symbol-light mr-5">
                  <span className="symbol-label">
                    <img
                      src="assets/media/svg/misc/014-kickstarter.svg"
                      className="h-50 align-self-center"
                      alt=""
                    />
                  </span>
                </div>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-bolder text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    Bestseller Theme
                  </Link>
                  <span className="text-muted font-weight-bold">
                    Most Successful Fellas
                  </span>
                </div>
                <span className="btn btn-sm btn-light font-weight-bolder my-lg-0 my-2 py-1 text-dark-50">
                  +4500$
                </span>
              </div>
              {/* end: Item */}
            </div>
            {/* end::Section */}
            {/* begin::Section */}
            <div className="mb-5">
              <h5 className="font-weight-bold mb-5">Notifications</h5>
              {/* begin: Item */}
              <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-5">
                <span className="svg-icon svg-icon-warning mr-5">
                  <span className="svg-icon svg-icon-lg">
                    {/* begin::Svg Icon | path:assets/media/svg/icons/Home/Library.svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <path
                          d="M5,3 L6,3 C6.55228475,3 7,3.44771525 7,4 L7,20 C7,20.5522847 6.55228475,21 6,21 L5,21 C4.44771525,21 4,20.5522847 4,20 L4,4 C4,3.44771525 4.44771525,3 5,3 Z M10,3 L11,3 C11.5522847,3 12,3.44771525 12,4 L12,20 C12,20.5522847 11.5522847,21 11,21 L10,21 C9.44771525,21 9,20.5522847 9,20 L9,4 C9,3.44771525 9.44771525,3 10,3 Z"
                          fill="#000000"
                        />
                        <rect
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(17.825568, 11.945519) rotate(-19.000000) translate(-17.825568, -11.945519) "
                          x="16.3255682"
                          y="2.94551858"
                          width={3}
                          height={18}
                          rx={1}
                        />
                      </g>
                    </svg>
                    {/* end::Svg Icon */}
                  </span>
                </span>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    Another purpose persuade
                  </Link>
                  <span className="text-muted font-size-sm">Due in 2 Days</span>
                </div>
                <span className="font-weight-bolder text-warning py-1 font-size-lg">
                  +28%
                </span>
              </div>
              {/* end: Item */}
              {/* begin: Item */}
              <div className="d-flex align-items-center bg-light-success rounded p-5 mb-5">
                <span className="svg-icon svg-icon-success mr-5">
                  <span className="svg-icon svg-icon-lg">
                    {/* begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <path
                          d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953) "
                        />
                        <path
                          d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                    {/* end::Svg Icon */}
                  </span>
                </span>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-normal text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    Would be to people
                  </Link>
                  <span className="text-muted font-size-sm">Due in 2 Days</span>
                </div>
                <span className="font-weight-bolder text-success py-1 font-size-lg">
                  +50%
                </span>
              </div>
              {/* end: Item */}
              {/* begin: Item */}
              <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-5">
                <span className="svg-icon svg-icon-danger mr-5">
                  <span className="svg-icon svg-icon-lg">
                    {/* begin::Svg Icon | path:assets/media/svg/icons/Communication/Group-chat.svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <path
                          d="M16,15.6315789 L16,12 C16,10.3431458 14.6568542,9 13,9 L6.16183229,9 L6.16183229,5.52631579 C6.16183229,4.13107011 7.29290239,3 8.68814808,3 L20.4776218,3 C21.8728674,3 23.0039375,4.13107011 23.0039375,5.52631579 L23.0039375,13.1052632 L23.0206157,17.786793 C23.0215995,18.0629336 22.7985408,18.2875874 22.5224001,18.2885711 C22.3891754,18.2890457 22.2612702,18.2363324 22.1670655,18.1421277 L19.6565168,15.6315789 L16,15.6315789 Z"
                          fill="#000000"
                        />
                        <path
                          d="M1.98505595,18 L1.98505595,13 C1.98505595,11.8954305 2.88048645,11 3.98505595,11 L11.9850559,11 C13.0896254,11 13.9850559,11.8954305 13.9850559,13 L13.9850559,18 C13.9850559,19.1045695 13.0896254,20 11.9850559,20 L4.10078614,20 L2.85693427,21.1905292 C2.65744295,21.3814685 2.34093638,21.3745358 2.14999706,21.1750444 C2.06092565,21.0819836 2.01120804,20.958136 2.01120804,20.8293182 L2.01120804,18.32426 C1.99400175,18.2187196 1.98505595,18.1104045 1.98505595,18 Z M6.5,14 C6.22385763,14 6,14.2238576 6,14.5 C6,14.7761424 6.22385763,15 6.5,15 L11.5,15 C11.7761424,15 12,14.7761424 12,14.5 C12,14.2238576 11.7761424,14 11.5,14 L6.5,14 Z M9.5,16 C9.22385763,16 9,16.2238576 9,16.5 C9,16.7761424 9.22385763,17 9.5,17 L11.5,17 C11.7761424,17 12,16.7761424 12,16.5 C12,16.2238576 11.7761424,16 11.5,16 L9.5,16 Z"
                          fill="#000000"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                    {/* end::Svg Icon */}
                  </span>
                </span>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    Purpose would be to persuade
                  </Link>
                  <span className="text-muted font-size-sm">Due in 2 Days</span>
                </div>
                <span className="font-weight-bolder text-danger py-1 font-size-lg">
                  -27%
                </span>
              </div>
              {/* end: Item */}
              {/* begin: Item */}
              <div className="d-flex align-items-center bg-light-info rounded p-5">
                <span className="svg-icon svg-icon-info mr-5">
                  <span className="svg-icon svg-icon-lg">
                    {/* begin::Svg Icon | path:assets/media/svg/icons/General/Attachment2.svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        strokeWidth={1}
                        fill="none"
                        fillRule="evenodd"
                      >
                        <rect x={0} y={0} width={24} height={24} />
                        <path
                          d="M11.7573593,15.2426407 L8.75735931,15.2426407 C8.20507456,15.2426407 7.75735931,15.6903559 7.75735931,16.2426407 C7.75735931,16.7949254 8.20507456,17.2426407 8.75735931,17.2426407 L11.7573593,17.2426407 L11.7573593,18.2426407 C11.7573593,19.3472102 10.8619288,20.2426407 9.75735931,20.2426407 L5.75735931,20.2426407 C4.65278981,20.2426407 3.75735931,19.3472102 3.75735931,18.2426407 L3.75735931,14.2426407 C3.75735931,13.1380712 4.65278981,12.2426407 5.75735931,12.2426407 L9.75735931,12.2426407 C10.8619288,12.2426407 11.7573593,13.1380712 11.7573593,14.2426407 L11.7573593,15.2426407 Z"
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(7.757359, 16.242641) rotate(-45.000000) translate(-7.757359, -16.242641) "
                        />
                        <path
                          d="M12.2426407,8.75735931 L15.2426407,8.75735931 C15.7949254,8.75735931 16.2426407,8.30964406 16.2426407,7.75735931 C16.2426407,7.20507456 15.7949254,6.75735931 15.2426407,6.75735931 L12.2426407,6.75735931 L12.2426407,5.75735931 C12.2426407,4.65278981 13.1380712,3.75735931 14.2426407,3.75735931 L18.2426407,3.75735931 C19.3472102,3.75735931 20.2426407,4.65278981 20.2426407,5.75735931 L20.2426407,9.75735931 C20.2426407,10.8619288 19.3472102,11.7573593 18.2426407,11.7573593 L14.2426407,11.7573593 C13.1380712,11.7573593 12.2426407,10.8619288 12.2426407,9.75735931 L12.2426407,8.75735931 Z"
                          fill="#000000"
                          transform="translate(16.242641, 7.757359) rotate(-45.000000) translate(-16.242641, -7.757359) "
                        />
                        <path
                          d="M5.89339828,3.42893219 C6.44568303,3.42893219 6.89339828,3.87664744 6.89339828,4.42893219 L6.89339828,6.42893219 C6.89339828,6.98121694 6.44568303,7.42893219 5.89339828,7.42893219 C5.34111353,7.42893219 4.89339828,6.98121694 4.89339828,6.42893219 L4.89339828,4.42893219 C4.89339828,3.87664744 5.34111353,3.42893219 5.89339828,3.42893219 Z M11.4289322,5.13603897 C11.8194565,5.52656326 11.8194565,6.15972824 11.4289322,6.55025253 L10.0147186,7.96446609 C9.62419433,8.35499039 8.99102936,8.35499039 8.60050506,7.96446609 C8.20998077,7.5739418 8.20998077,6.94077682 8.60050506,6.55025253 L10.0147186,5.13603897 C10.4052429,4.74551468 11.0384079,4.74551468 11.4289322,5.13603897 Z M0.600505063,5.13603897 C0.991029355,4.74551468 1.62419433,4.74551468 2.01471863,5.13603897 L3.42893219,6.55025253 C3.81945648,6.94077682 3.81945648,7.5739418 3.42893219,7.96446609 C3.0384079,8.35499039 2.40524292,8.35499039 2.01471863,7.96446609 L0.600505063,6.55025253 C0.209980772,6.15972824 0.209980772,5.52656326 0.600505063,5.13603897 Z"
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(6.014719, 5.843146) rotate(-45.000000) translate(-6.014719, -5.843146) "
                        />
                        <path
                          d="M17.9142136,15.4497475 C18.4664983,15.4497475 18.9142136,15.8974627 18.9142136,16.4497475 L18.9142136,18.4497475 C18.9142136,19.0020322 18.4664983,19.4497475 17.9142136,19.4497475 C17.3619288,19.4497475 16.9142136,19.0020322 16.9142136,18.4497475 L16.9142136,16.4497475 C16.9142136,15.8974627 17.3619288,15.4497475 17.9142136,15.4497475 Z M23.4497475,17.1568542 C23.8402718,17.5473785 23.8402718,18.1805435 23.4497475,18.5710678 L22.0355339,19.9852814 C21.6450096,20.3758057 21.0118446,20.3758057 20.6213203,19.9852814 C20.2307961,19.5947571 20.2307961,18.9615921 20.6213203,18.5710678 L22.0355339,17.1568542 C22.4260582,16.76633 23.0592232,16.76633 23.4497475,17.1568542 Z M12.6213203,17.1568542 C13.0118446,16.76633 13.6450096,16.76633 14.0355339,17.1568542 L15.4497475,18.5710678 C15.8402718,18.9615921 15.8402718,19.5947571 15.4497475,19.9852814 C15.0592232,20.3758057 14.4260582,20.3758057 14.0355339,19.9852814 L12.6213203,18.5710678 C12.2307961,18.1805435 12.2307961,17.5473785 12.6213203,17.1568542 Z"
                          fill="#000000"
                          opacity="0.3"
                          transform="translate(18.035534, 17.863961) scale(1, -1) rotate(45.000000) translate(-18.035534, -17.863961) "
                        />
                      </g>
                    </svg>
                    {/* end::Svg Icon */}
                  </span>
                </span>
                <div className="d-flex flex-column flex-grow-1 mr-2">
                  <Link
                    to="#"
                    className="font-weight-normel text-dark-75 text-hover-primary font-size-lg mb-1"
                  >
                    The best product
                  </Link>
                  <span className="text-muted font-size-sm">Due in 2 Days</span>
                </div>
                <span className="font-weight-bolder text-info py-1 font-size-lg">
                  +8%
                </span>
              </div>
              {/* end: Item */}
            </div>
            {/* end::Section */}
          </div>
          {/* end::Tabpane */}
          {/* begin::Tabpane */}
          <div
            className="tab-pane fade pt-2 pr-5 mr-n5"
            id="kt_quick_panel_notifications"
            role="tabpanel"
          >
            {/* begin::Nav */}
            <div className="navi navi-icon-circle navi-spacer-x-0">
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-bell text-success icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold font-size-lg">
                      5 new user generated report
                    </div>
                    <div className="text-muted">Reports based on sales</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon2-box text-danger icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      2 new items submited
                    </div>
                    <div className="text-muted">by Grog John</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-psd text-primary icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      79 PSD files generated
                    </div>
                    <div className="text-muted">Reports based on sales</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon2-supermarket text-warning icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      $2900 worth producucts sold
                    </div>
                    <div className="text-muted">Total 234 items</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-paper-plane-1 text-success icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      4.5h-avarage response time
                    </div>
                    <div className="text-muted">Fostest is Barry</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-safe-shield-protection text-danger icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      3 Defence alerts
                    </div>
                    <div className="text-muted">
                      40% less alerts thar last week
                    </div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-notepad text-primary icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      Avarage 4 blog posts per author
                    </div>
                    <div className="text-muted">Most posted 12 time</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-users-1 text-warning icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      16 authors joined last week
                    </div>
                    <div className="text-muted">
                      9 photodrapehrs, 7 designer
                    </div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon2-box text-info icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      2 new items have been submited
                    </div>
                    <div className="text-muted">by Grog John</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon2-download text-success icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      2.8 GB-total downloads size
                    </div>
                    <div className="text-muted">Mostly PSD end AL concepts</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon2-supermarket text-danger icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      $2900 worth producucts sold
                    </div>
                    <div className="text-muted">Total 234 items</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-bell text-primary icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      7 new user generated report
                    </div>
                    <div className="text-muted">Reports based on sales</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
              {/* begin::Item */}
              <Link to="#" className="navi-item">
                <div className="navi-link rounded">
                  <div className="symbol symbol-50 mr-3">
                    <div className="symbol-label">
                      <i className="flaticon-paper-plane-1 text-success icon-lg" />
                    </div>
                  </div>
                  <div className="navi-text">
                    <div className="font-weight-bold  font-size-lg">
                      4.5h-avarage response time
                    </div>
                    <div className="text-muted">Fostest is Barry</div>
                  </div>
                </div>
              </Link>
              {/* end::Item */}
            </div>
            {/* end::Nav */}
          </div>
          {/* end::Tabpane */}
          {/* begin::Tabpane */}
          <div
            className="tab-pane fade pt-3 pr-5 mr-n5"
            id="kt_quick_panel_settings"
            role="tabpanel"
          >
            <form className="form">
              {/* begin::Section */}
              <div>
                <h5 className="font-weight-bold mb-3">Customer Care</h5>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Enable Notifications:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-success switch-sm">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="select"
                        />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Enable Case Tracking:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-success switch-sm">
                      <label>
                        <input
                          type="checkbox"
                          name="quick_panel_notifications_2"
                        />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Support Portal:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-success switch-sm">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="select"
                        />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              {/* end::Section */}
              <div className="separator separator-dashed my-6" />
              {/* begin::Section */}
              <div className="pt-2">
                <h5 className="font-weight-bold mb-3">Reports</h5>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Generate Reports:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-sm switch-danger">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="select"
                        />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Enable Report Export:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-sm switch-danger">
                      <label>
                        <input type="checkbox" name="select" />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Allow Data Collection:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-sm switch-danger">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="select"
                        />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              {/* end::Section */}
              <div className="separator separator-dashed my-6" />
              {/* begin::Section */}
              <div className="pt-2">
                <h5 className="font-weight-bold mb-3">Memebers</h5>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Enable Member singup:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-sm switch-primary">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="select"
                        />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Allow User Feedbacks:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-sm switch-primary">
                      <label>
                        <input type="checkbox" name="select" />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
                <div className="form-group mb-0 row align-items-center">
                  <label className="col-8 col-form-label">
                    Enable Customer Portal:
                  </label>
                  <div className="col-4 d-flex justify-content-end">
                    <span className="switch switch-sm switch-primary">
                      <label>
                        <input
                          type="checkbox"
                          defaultChecked="checked"
                          name="select"
                        />
                        <span />
                      </label>
                    </span>
                  </div>
                </div>
              </div>
              {/* end::Section */}
            </form>
          </div>
          {/* end::Tabpane */}
        </div>
      </div>
      {/* end::Content */}
    </div>
  );
};