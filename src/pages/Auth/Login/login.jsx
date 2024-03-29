import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

// Importing assets
import IC_LOGO from '../../../assets/images/ic-logo.svg';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../../config';

const Login = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="login-content flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        {/* begin::Content body */}
        <div className="d-flex flex-column-fluid flex-center">
          {/* begin::Signin */}
          <div className="login-form login-signin">
            {/* begin::Form */}
            <img src={IC_LOGO} alt="logo" className="envision-red-logo" />
            <form
              className="form"
              noValidate="novalidate"
              id="kt_login_signin_form"
            >
              {/* begin::Title */}
              <div className="pb-7 pt-lg-0 pt-5">
                <h3 className="welcome-title">Welcome to EnnVisions</h3>
                <span className="text-muted gilroy-medium">
                  New Here?{' '}
                  <Link
                    to={'/auth/' + PUBLIC_ROUTES.registerVendor.path}
                    className="text-primary gilroy-semi-bold"
                  >
                    Create an Account
                  </Link>
                </span>
              </div>
              {/* begin::Title */}
              {/* begin::Form group */}
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg"
                  type="text"
                  name="username"
                  autoComplete="off"
                  placeholder="Enter Email Address"
                />
              </div>
              {/* end::Form group */}
              {/* begin::Form group */}
              <div className="form-group">
                <input
                  className="form-control form-control-solid h-auto py-4 px-6 rounded-lg"
                  type="password"
                  name="password"
                  autoComplete="off"
                  placeholder="Enter Password"
                />
                <div className="d-flex justify-content-between mt-n5">
                  <Link
                    to={'/auth/' + PUBLIC_ROUTES.forgotPasswordEmail.path}
                    className="gilroy-medium forgot-password text-primary font-size-h6 font-weight-bolder text-hover-primary pt-5"
                  >
                    FORGOT PASSWORD ?
                  </Link>
                </div>
              </div>
              {/* end::Form group */}
              {/* begin::Action */}
              <div className="pb-lg-0 pb-5">
                <button
                  type="submit"
                  onClick={() => navigate(PRIVATE_ROUTES.dashboard.path)}
                  className="gilroy-medium btn btn-primary font-weight-bolder font-size-h6 px-8 py-4 my-3 mr-3"
                >
                  SIGN IN
                </button>
                <button
                  type="button"
                  className="gilroy-medium btn btn-light-primary font-weight-bolder px-8 py-4 my-3 font-size-lg"
                >
                  <span className="svg-icon svg-icon-md">
                    {/* begin::Svg Icon | path:assets/media/svg/social-icons/google.svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M19.9895 10.1871C19.9895 9.36767 19.9214 8.76973 19.7742 8.14966H10.1992V11.848H15.8195C15.7062 12.7671 15.0943 14.1512 13.7346 15.0813L13.7155 15.2051L16.7429 17.4969L16.9527 17.5174C18.879 15.7789 19.9895 13.221 19.9895 10.1871Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M10.1993 19.9313C12.9527 19.9313 15.2643 19.0454 16.9527 17.5174L13.7346 15.0813C12.8734 15.6682 11.7176 16.0779 10.1993 16.0779C7.50243 16.0779 5.21352 14.3395 4.39759 11.9366L4.27799 11.9466L1.13003 14.3273L1.08887 14.4391C2.76588 17.6945 6.21061 19.9313 10.1993 19.9313Z"
                        fill="#34A853"
                      />
                      <path
                        d="M4.39748 11.9366C4.18219 11.3166 4.05759 10.6521 4.05759 9.96565C4.05759 9.27909 4.18219 8.61473 4.38615 7.99466L4.38045 7.8626L1.19304 5.44366L1.08875 5.49214C0.397576 6.84305 0.000976562 8.36008 0.000976562 9.96565C0.000976562 11.5712 0.397576 13.0882 1.08875 14.4391L4.39748 11.9366Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M10.1993 3.85336C12.1142 3.85336 13.406 4.66168 14.1425 5.33717L17.0207 2.59107C15.253 0.985496 12.9527 0 10.1993 0C6.2106 0 2.76588 2.23672 1.08887 5.49214L4.38626 7.99466C5.21352 5.59183 7.50242 3.85336 10.1993 3.85336Z"
                        fill="#EB4335"
                      />
                    </svg>
                    {/* end::Svg Icon */}
                  </span>
                  SIGN IN WITH GOOGLE
                </button>
              </div>
              {/* end::Action */}
            </form>
            {/* end::Form */}
          </div>
          {/* end::Signin */}
        </div>
        {/* end::Content body */}
        {/* begin::Content footer */}
        <div className="footer-links d-flex justify-content-center align-items-end py-7 py-lg-0">
          <Link
            className="gilroy-medium text-primary font-weight-bolder font-size-h5"
            to="#"
          >
            TERMS
          </Link>
          <Link
            className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5"
            to="#"
          >
            PLANS
          </Link>
          <Link
            className="gilroy-medium text-primary ml-10 font-weight-bolder font-size-h5"
            to="#"
          >
            CONTACT US
          </Link>
        </div>
        {/* end::Content footer */}
      </div>
    </React.Fragment>
  );
};

export default Login;
