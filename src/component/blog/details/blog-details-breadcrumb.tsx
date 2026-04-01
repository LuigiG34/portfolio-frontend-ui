import type { IdProps } from "../../../types/custom-d-t";
import { blog_data } from "../../../data/blog-data";

export default function BlogDetailsBreadcrumb({ id }: IdProps) {
  // Find the blog that matches the given ID
  const blog = blog_data.find((item) => item.id == id);

  return (
    <div className="blog-details-area">
      <div
        className="blog-details-bg blog-details-bg-height blog-details-overlay p-relative d-flex align-items-end pt-170 pb-170"
        style={{
          backgroundImage: `url(/assets/img/inner-blog/blog-details/blog-details-1.jpg)`,
        }}
      >
        <div className="blog-details-overlay-shape">
          <img src="/assets/img/inner-blog/blog-details/bg-shape/overly.png" alt="overlay" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-11">
              <div className="blog-details-content z-index-5">
                <span className="blog-details-meta">
                  Creative <i>. 01 Oct, 2022</i>
                </span>
                <h4 className="blog-details-title tp-char-animation">
                  {blog?.title}
                </h4>
                <div className="blog-details-top-author d-flex align-items-center">
                  <img src="/assets/img/inner-blog/blog-details/avatar/avatar-2.jpg" alt="avatar" />
                  <span>
                    Mike Granetz / <i>5 min</i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
