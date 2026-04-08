import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import IconDashboard from "@/component/svg/icon-dashboard";
import IconChevron from "@/component/svg/icon-chevron";
import IconCollapse from "@/component/svg/icon-collapse";
import IconExpand from "@/component/svg/icon-expand";
import IconMail from "@/component/svg/icon-mail";
import IconSkills from "@/component/svg/icon-skills";
import IconDegrees from "@/component/svg/icon-degrees";
import IconExperience from "@/component/svg/icon-experience";
import IconProjects from "@/component/svg/icon-projects";
import IconTechstack from "@/component/svg/icon-techstack";

interface NavItem {
    label: string;
    path: string;
    icon: React.ReactNode;
    children?: NavItem[];
}

const NAV_ITEMS: NavItem[] = [
    { label: "Dashboard", path: "/admin", icon: <IconDashboard /> },
    { label: "Contact", path: "/admin/contact", icon: <IconMail /> },
    { label: "Hardskills", path: "/admin/skills", icon: <IconSkills /> },
    { label: "Degrees", path: "/admin/degrees", icon: <IconDegrees /> },
    { label: "Experience", path: "/admin/experience", icon: <IconExperience /> },
    { label: "Projects", path: "/admin/projects", icon: <IconProjects /> },
    { label: "Techstack", path: "/admin/techstack", icon: <IconTechstack /> },
];
// ──────────────────────────────────────────────────────────────────────────

interface NavItemRowProps {
    item: NavItem;
    collapsed: boolean;
}

const NavItemRow = ({ item, collapsed }: NavItemRowProps) => {
    const location = useLocation();
    const hasChildren = !!item.children?.length;
    const isGroupActive = hasChildren && item.children!.some(c => location.pathname.startsWith(c.path));
    const [open, setOpen] = useState(isGroupActive);

    if (hasChildren) {
        return (
            <li className="nav-group">
                <button
                    className={`nav-btn${isGroupActive ? " active" : ""}`}
                    onClick={() => setOpen(o => !o)}
                    title={collapsed ? item.label : undefined}
                >
                    <span className="nav-icon">{item.icon}</span>
                    {!collapsed && <span className="nav-label">{item.label}</span>}
                    {!collapsed && <span className="nav-chevron"><IconChevron open={open} /></span>}
                </button>

                {!collapsed && open && (
                    <ul className="nav-children">
                        {item.children!.map(child => (
                            <li key={child.path}>
                                <NavLink
                                    to={child.path}
                                    end
                                    className={({ isActive }) => `nav-child-link${isActive ? " active" : ""}`}
                                >
                                    {child.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }

    return (
        <li>
            <NavLink
                to={item.path}
                end
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                title={collapsed ? item.label : undefined}
            >
                <span className="nav-icon">{item.icon}</span>
                {!collapsed && <span className="nav-label">{item.label}</span>}
            </NavLink>
        </li>
    );
};

const AdminSideNav = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            <nav className={`admin-sidenav${collapsed ? " collapsed" : ""}`}>
                {/* Logo */}
                <div className="nav-logo">
                    <div className="nav-logo-mark">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    {!collapsed && (
                        <span>
                            <span className="nav-logo-text">Admin</span>
                            <span className="nav-logo-sub">Control Panel</span>
                        </span>
                    )}
                </div>

                {/* Nav items */}
                <ul className="nav-list">
                    {NAV_ITEMS.map(item => (
                        <NavItemRow key={item.path} item={item} collapsed={collapsed} />
                    ))}
                </ul>

                {/* Collapse toggle */}
                <button className="nav-collapse-btn" onClick={() => setCollapsed(c => !c)}>
                    {collapsed ? <IconExpand /> : <><IconCollapse /><span>Collapse</span></>}
                </button>
            </nav>
        </>
    );
};

export default AdminSideNav;