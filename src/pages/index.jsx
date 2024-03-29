import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { privateRoutes } from '../routes';

// Components Import
import HeaderMobile from '../components/common/HeaderMobile.jsx';
import Sidebar from '../components/common/Sidebar/Sidebar.jsx';
import Header from '../components/common/Header.jsx';
import UserPanel from '../components/Dashboard/UserPanel.jsx';
import QuickCart from '../components/Dashboard/QuickCart.jsx';
import QuickPanel from '../components/Dashboard/QuickPanel.jsx';
import ChatPanel from '../components/Dashboard/ChatPanel.jsx';
import ScrollToTop from '../components/Dashboard/ScrollToTop.jsx';
import DemoPanel from '../components/Dashboard/DemoPanel.jsx';
import SubHeader from '../components/common/SubHeader.jsx';

const pagesIndex = () => {
  const location = useLocation();
  const [menu, setMenu] = useState('');
  const [subMenu, setSubMenu] = useState('');
  useEffect(() => {
    const index = privateRoutes.findIndex(data => data.path === location.pathname);
    if (index < 0) return;
    setMenu(privateRoutes[index].menu);
    setSubMenu(privateRoutes[index].subMenu);
  }, [location]);

  return (
    <React.Fragment>
      <div>
        {/* begin::Main */}
        {/* begin::Header Mobile */}
        <HeaderMobile />
        {/* end::Header Mobile */}
        <div className="d-flex flex-column flex-root">
          {/* begin::Page */}
          <div className="d-flex flex-row flex-column-fluid page">
            {/* begin::Aside */}
            <Sidebar />
            {/* end::Aside */}
            {/* begin::Wrapper */}
            <div
              className="d-flex flex-column flex-row-fluid wrapper"
              id="kt_wrapper"
            >
              {/* begin::Header */}
              <Header />
              {/* end::Header */}

              {/* begin::Content */}
              <div
                className="content  d-flex flex-column flex-column-fluid"
                id="kt_content"
              >
                {/* begin::Subheader */}
                <SubHeader menu={menu} subMenu={subMenu} />
                {/* end::Subheader */}
                <Outlet />
              </div>
              {/* end::Wrapper */}
            </div>
            {/* end::Page */}
          </div>
          {/* end::Main */}
          {/* begin::User Panel */}
          <UserPanel />
          {/* end::User Panel */}
          {/* begin::Quick Cart */}
          <QuickCart />
          {/* end::Quick Cart */}
          {/* begin::Quick Panel */}
          <QuickPanel />
          {/* end::Quick Panel */}
          {/* begin::Chat Panel */}
          <ChatPanel />
          {/* end::Chat Panel */}
          {/* begin::Scrolltop */}
          <ScrollToTop />
          {/* begin::Demo Panel */}
          <DemoPanel />
          {/* end::Demo Panel */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default pagesIndex;