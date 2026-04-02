import { Navigate } from 'react-router-dom';
import { type ReactNode } from 'react';
import { isAdmin } from "@/utils/auth.ts";

interface Props {
    requiredRole: string;
    children: ReactNode;
}

const ProtectedRoute = ({ requiredRole, children }: Props) => {
    if(!isAdmin(requiredRole)) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;