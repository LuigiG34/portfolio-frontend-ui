import { Link } from "react-router-dom";

export default function BlogDetailsAuthor() {
  return (
    <div className="blog-details-author d-flex mb-60">
      <div className="blog-details-author-img">
        <img
          src="/assets/img/inner-blog/blog-details/avatar/avatar-1.jpg"
          alt=""
        />
      </div>
      <div className="blog-details-author-content-wrap">
        <div className="blog-details-author-social text-end">
          <Link to="#">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </div>
        <div className="blog-details-author-content">
          <h4 className="blog-details-author-title">Lea Cohen</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor.!
          </p>
        </div>
      </div>
    </div>
  );
}
