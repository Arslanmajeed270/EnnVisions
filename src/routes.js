import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "./config";
export const authRoutes = [
  PUBLIC_ROUTES.login.path,
  PUBLIC_ROUTES.forgotPasswordEmail.path,
  PUBLIC_ROUTES.resetPassword.path,
  PUBLIC_ROUTES.registerVendor.path,
  PUBLIC_ROUTES.confirmationPassword.path,
];

export const privateRoutes = [
  PRIVATE_ROUTES.dashboard,
  PRIVATE_ROUTES.userRoles.addNewRole,
  PRIVATE_ROUTES.userRoles.createRegistrationForm,
  PRIVATE_ROUTES.userRoles.userRoleList,
  PRIVATE_ROUTES.adminManage.createAdmin,
  PRIVATE_ROUTES.adminManage.editAdmin,
  PRIVATE_ROUTES.adminManage.adminDetail,
  PRIVATE_ROUTES.fleetManage.createFleet,
  PRIVATE_ROUTES.fleetManage.editFleet,
  PRIVATE_ROUTES.fleetManage.fleetDetail,
  PRIVATE_ROUTES.dispatcherManage.createDispatcher,
  PRIVATE_ROUTES.dispatcherManage.editDispatcher,
  PRIVATE_ROUTES.dispatcherManage.dispatcherDetail,
  PRIVATE_ROUTES.vendorManage.createVendor,
  PRIVATE_ROUTES.vendorManage.editVendor,
  PRIVATE_ROUTES.vendorManage.vendorDetail,
  PRIVATE_ROUTES.vendorManage.vendorList,
  PRIVATE_ROUTES.vendorManage.vendorOutLets,
  PRIVATE_ROUTES.vendorManage.editOutLet,
  PRIVATE_ROUTES.vendorManage.outLetsDetail,
];