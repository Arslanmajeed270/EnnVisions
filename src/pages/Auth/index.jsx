import React from 'react';
import Aside from './components/Aside.jsx';
import { Outlet } from 'react-router-dom';
const AuthIndex = () => {
  return (
    <React.Fragment>
      {/* begin::Main */}
      <div className="d-flex flex-column flex-root">
        {/* begin::Login */}
        <div
          className="login login-1 login-signin-on d-flex flex-column flex-lg-row flex-column-fluid bg-white"
          id="kt_login"
        >
          {/* begin::Aside */}
          <Aside />
          {/* begin::Aside */}
          {/* begin::Content */}
          <Outlet />
          {/* end::Content */}
        </div>
        {/* end::Login */}
      </div>
      {/* end::Main */}
    </React.Fragment>
  );
};

export default AuthIndex;