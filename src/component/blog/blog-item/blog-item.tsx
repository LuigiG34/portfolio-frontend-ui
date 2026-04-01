import type { IBlogDT } from "../../../types/blog-d-t";
import { Link } from "react-router-dom";

export default function BlogItem({ item }: { item: IBlogDT }) {
  return (
    <div className="tp-blog-item">
      <div className="tp-blog-thumb fix p-relative">
        <img src={item.img!} alt="blog-img" />
        <div className="tp-blog-meta">
          <span>{item.date}</span>
        </div>
      </div>
      <div className="tp-blog-content">
        <span>{item.category}</span>
        <h4 className="tp-blog-title-sm">
          <Link to={`/blog-details/${item.id}`}>{item.title}</Link>
        </h4>
      </div>
    </div>
  );
}
