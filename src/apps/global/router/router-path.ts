export enum RouterPath {
  Home = "/",

  // auth
  Login = "/login",

  // user
  ResetPassword = "/user/reset-password",

  // terms
  Terms = "/terms",
}

export const PublicRoutes = [RouterPath.Login, RouterPath.ResetPassword];
