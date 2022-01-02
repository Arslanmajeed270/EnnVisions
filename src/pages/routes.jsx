import React, { useState } from "react";
import { Route } from "react-router-dom";
import { PRIVATE_ROUTES } from "../config";

import Index from "./Dashboard/dashboard.jsx";
// start: ROLES Import
import AddNewRoles from "./UserRoles/addNewRoles";
import CreateRegistrationForm from "./UserRoles/createRegistrationForm";
import UserRoleList from "./UserRoles/userRolesList";
// start: ADMIN Import
import CreateAdmin from "./AdminManage/createAdmin";
import AdminDetail from "./AdminManage/adminDetail";
// start: FLEET Import
import CreateFleet from "./FleetManage/createFleet";
import FleetDetail from "./FleetManage/fleetDetail";
// start: DISPATCHER Import
import CreateDispatcher from "./DispatcherManage/createDispatcher";
import DispatcherDetail from "./DispatcherManage/dispatcherDetail";
// start: VENDOR Import
import CreateVendor from "./VendorManage/createVendor";
import VendorDetail from "./VendorManage/vendorDetail";
import VendorList from "./VendorManage/vendorList";
import VendorOutlets from "./VendorManage/OutLets/vendorOutlets";
import OutLetsDetail from "./VendorManage/OutLets/outLetsDetail";
import EditOutLets from "./VendorManage/OutLets/editOutLets";
import HelperList from "./VendorManage/helperList";

export default () => {
  const [routes] = useState([
    { path: PRIVATE_ROUTES.dashboard.path, component: Index },

    { path: PRIVATE_ROUTES.userRoles.addNewRole.path, component: AddNewRoles },
    {
      path: PRIVATE_ROUTES.userRoles.createRegistrationForm.path,
      component: CreateRegistrationForm,
    },
    {
      path: PRIVATE_ROUTES.userRoles.userRoleList.path,
      component: UserRoleList,
    },

    {
      path: PRIVATE_ROUTES.adminManage.createAdmin.path,
      component: CreateAdmin,
    },
    {
      path: PRIVATE_ROUTES.adminManage.adminDetail.path,
      component: AdminDetail,
    },
    { path: PRIVATE_ROUTES.adminManage.editAdmin.path, component: CreateAdmin },

    {
      path: PRIVATE_ROUTES.fleetManage.createFleet.path,
      component: CreateFleet,
    },
    { path: PRIVATE_ROUTES.fleetManage.editFleet.path, component: CreateFleet },
    {
      path: PRIVATE_ROUTES.fleetManage.fleetDetail.path,
      component: FleetDetail,
    },

    {
      path: PRIVATE_ROUTES.dispatcherManage.createDispatcher.path,
      component: CreateDispatcher,
    },
    {
      path: PRIVATE_ROUTES.dispatcherManage.editDispatcher.path,
      component: CreateDispatcher,
    },
    {
      path: PRIVATE_ROUTES.dispatcherManage.dispatcherDetail.path,
      component: DispatcherDetail,
    },
    {
      path: PRIVATE_ROUTES.dispatcherManage.dispatcherDetail.path,
      component: DispatcherDetail,
    },

    {
      path: PRIVATE_ROUTES.vendorManage.createVendor.path,
      component: CreateVendor,
    },
    {
      path: PRIVATE_ROUTES.vendorManage.vendorDetail.path,
      component: VendorDetail,
    },
    {
      path: PRIVATE_ROUTES.vendorManage.vendorList.path,
      component: VendorList,
    },
    {
      path: PRIVATE_ROUTES.vendorManage.vendorOutLets.path,
      component: VendorOutlets,
    },
    {
      path: PRIVATE_ROUTES.vendorManage.outLetsDetail.path,
      component: OutLetsDetail,
    },
    {
      path: PRIVATE_ROUTES.vendorManage.editOutLet.path,
      component: EditOutLets,
    },
    {
      path: PRIVATE_ROUTES.vendorManage.helperList.path,
      component: HelperList,
    },
  ]);

  return (
    <>
      {routes.map(({ path, component }, index) => (
        <Route exact key={index} path={path} component={component} />
      ))}
    </>
  );
};