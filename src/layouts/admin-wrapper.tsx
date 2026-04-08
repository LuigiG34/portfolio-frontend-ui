import { type ReactNode } from "react";

import SEO from "../component/seo";
import ProtectedRoute from "@/security/protected-route.tsx";
import AdminSideNav from "../layouts/sidenav/admin-sidenav.tsx";

interface WrapperProps {
    children: ReactNode;
    title?: string;
}

const AdminWrapper = ({ children, title }: WrapperProps) => {
    return (
        <ProtectedRoute requiredRole="ROLE_ADMIN">
            <SEO title={title} />
            <div id="admin-layout">
                <AdminSideNav />

                <main id="admin-content">
                    {children}
                </main>
            </div>
        </ProtectedRoute>
    );
};

export default AdminWrapper;