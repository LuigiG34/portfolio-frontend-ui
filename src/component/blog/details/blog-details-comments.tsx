import { Link } from "react-router-dom";

// comment data
const comment_data = [
  {
    id: 1,
    name: "John Doe",
    avatar: "/assets/img/inner-blog/blog-details/avatar/avatar-3.jpg",
    date: "April 8, 2024 at 7:38 am",
    comment:
      "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu.",
  },
  {
    id: 2,
    children: true,
    avatar: "/assets/img/inner-blog/blog-details/avatar/avatar-4.jpg",
    name: "Mary Jane",
    date: "May 10, 2024 at 8:40 am",
    comment:
      "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu.",
  },
  {
    id: 3,
    avatar: "/assets/img/inner-blog/blog-details/avatar/avatar-3.jpg",
    name: "Nancy Doe",
    date: "Feb 20, 2024 at 9:00 am",
    comment:
      "Quisque est tortor, condimentum eget faucibus vel, condimentum quis felis. Nunc non orci augue. Pellentesque elementum gravida arcu.",
  },
];

export default function BlogDetailsComments() {
  return (
    <ul>
      {comment_data.map((item) => (
        <li key={item.id} className={item.children ? "children" : ""}>
          <div className="postbox__comment-box d-flex">
            <div className="postbox__comment-info ">
              <div className="postbox__comment-avater mr-20">
                <img src={item.avatar} alt="avatar" />
              </div>
            </div>
            <div className="postbox__comment-text">
              <div className="postbox__comment-name d-flex justify-content-between align-items-center">
                <h5>{item.name}</h5>
                <span className="post-meta">{item.date}</span>
              </div>
              <p>{item.comment}</p>
              <div className="postbox__comment-reply">
                <Link to="#">
                  Reply
                </Link>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
