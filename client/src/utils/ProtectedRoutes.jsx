import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = ({isLoggedIn,userType}) => {

    return isLoggedIn === "Yes" ? <Outlet userType={userType} /> : <Navigate to="/sign-in"/>;
};

export default ProtectedRoutes;
