import { useEffect } from "react";

interface SeoProps {
    title?: string;
}

const SEO = ({ title }: SeoProps) => {
    useEffect(() => {
        document.title = `${title ? `${title}` : "Luigi Gandemer - Développeur Web"}`;
    }, [title]);

    return null;
};

export default SEO;
