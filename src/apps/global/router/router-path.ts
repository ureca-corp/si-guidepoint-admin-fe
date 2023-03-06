export enum RouterPath {
  Home = "/",

  // auth
  Login = "/login",

  // admin
  ResetPassword = "/admin/reset-password",
}

export const PublicRoutes = [RouterPath.Login, RouterPath.ResetPassword];
