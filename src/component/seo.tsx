import { useEffect } from "react";

interface SeoProps {
    title?: string;
}

const SEO = ({ title }: SeoProps) => {
    useEffect(() => {
        document.title = `${title ? `${title} - Liko Creative Portfolio React Template` : "Liko Creative Portfolio React Template"}`;
    }, [title]);

    return null;
};

export default SEO;
