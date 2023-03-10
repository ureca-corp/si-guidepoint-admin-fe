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
  TermUpdate = "/terms/update",
}

export const PublicRoutes = [RouterPath.Login, RouterPath.ResetPassword];
