import { Search } from "../svg";
import { blog_classic } from "../../data/blog-data";
import { Link } from "react-router-dom";

export default function BlogSidebar() {
  const rc_posts = [...blog_classic.filter((b) => b.img)].slice(0, 3);
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <img src="/assets/img/inner-blog/blog-sidebar/avatar/avata-2.jpg" alt="avatar" />
          </div>
          <div className="sidebar__author-content">
            <h4 className="sidebar__author-title">Mark Hopkins</h4>
            <p>Lorem ipsum dolor consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form action="#">
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search product" />
                <button type="submit">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            <li>
              <Link to="/blog-modern">Branding</Link>
            </li>
            <li>
              <Link to="/blog-modern">Lifestyle</Link>
            </li>
            <li>
              <Link to="/blog-modern">UI/UX Design</Link>
            </li>
            <li>
              <Link to="/blog-modern">Production</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {rc_posts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-30 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link to={`/blog-details/${item.id}`}>
                    <img
                      src={item.img!}
                      alt="blog-img"
                      width={128}
                      height={75}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta d-flex align-items-center">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link to={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            <Link to="#">Creative</Link>
            <Link to="#">Vision</Link>
            <Link to="#">Popular</Link>
            <Link to="#">Photography</Link>
            <Link to="#">Lifestyle</Link>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__banner-img">
            <img src="/assets/img/inner-blog/blog-sidebar/banner/banner.jpg" alt="banner" />
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Follow Us</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            <Link to="#">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
