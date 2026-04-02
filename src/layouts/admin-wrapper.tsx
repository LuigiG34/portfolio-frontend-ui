import { type ReactNode } from "react";

import SEO from "../component/seo";
import ProtectedRoute from "@/security/protected-route.tsx";

interface WrapperProps {
    children: ReactNode;
    title?: string;
}

const AdminWrapper = ({ children, title }: WrapperProps) => {
    return (
        <ProtectedRoute requiredRole="ROLE_ADMIN">
            <SEO title={title} />
            <main id="admin">
                {children}
            </main>
        </ProtectedRoute>
    );
};

export default AdminWrapper;
