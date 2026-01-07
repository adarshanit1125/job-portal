import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
    const { isAuthenticated, role: userRole } = useSelector(
        (state) => state.auth
    );

    if (!isAuthenticated) return <Navigate to="/login" />;
    if (role && role !== userRole) return <Navigate to="/" />;

    return children;
};

export default ProtectedRoute;
