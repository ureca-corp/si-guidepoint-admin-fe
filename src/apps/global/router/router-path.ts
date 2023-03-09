export enum RouterPath {
  Home = "/",

  // auth
  Login = "/login",

  // user
  ResetPassword = "/user/reset-password",

  // terms
  Terms = "/terms",
  Term = "/terms/detail",
  TermCreate = "/terms/create",
}

export const PublicRoutes = [RouterPath.Login, RouterPath.ResetPassword];
