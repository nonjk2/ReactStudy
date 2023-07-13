import { Navigate, Outlet } from "react-router-dom";

interface AuthRouteProps {
  user: boolean;
}

const NotAuthRoutes = ({ user }: AuthRouteProps) => {
  return user ? <Navigate to={"/"} /> : <Outlet />;
};
export default NotAuthRoutes;
