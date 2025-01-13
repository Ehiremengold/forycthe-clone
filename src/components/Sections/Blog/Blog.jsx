import "./Blog.css";
import StyledButton from "../../StyledButton/StyledButton";
import { posts } from "./posts";

const Blog = () => {
  return (
    <section className="blog">
      <div className="wrapper">
        <div className="blog__header">
          <h3>Read our articles, news and product blog</h3>
          <StyledButton dynamicText="Visit Blog" forwardIcon={true} />
        </div>
        <div className="blog-posts-section">
          {posts.map((post) => {
            const { id, img, title, author, date } = post;
            return (
              <div key={id} className="blog-post">
                <div className="blog-img-container">
                  <img src={img} alt="" />
                </div>
                <div className="blog__text">
                  <div className="white-line"></div>

                  <div className="text__contain">
                    <h4>Blog</h4>
                    <p className="subtle-text">
                      {author} &middot; {date}
                    </p>
                    <h3>{title}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Blog;
