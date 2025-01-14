import { motion } from "framer-motion";
import "./Blog.css";
import StyledButton from "../../StyledButton/StyledButton";
import { posts } from "./posts";
import useInView from "../../../CustomHooks/useInView";

const Blog = () => {
  const isInView = useInView(".blog", { threshold: 0.3 });

  return (
    <motion.section
      className="blog"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      <div className="wrapper">
        <motion.div
          className="blog__header"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -30 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <h3>Read our articles, news and product blog</h3>
          <StyledButton dynamicText="Visit Blog" forwardIcon={true} />
        </motion.div>

        <motion.div
          className="blog-posts-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
        >
          {posts.map((post) => {
            const { id, img, title, author, date } = post;
            return (
              <motion.div
                key={id}
                className="blog-post"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{
                  delay: 0.5 + id * 0.2,
                  duration: 0.8,
                  ease: "easeOut",
                }}
              >
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
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Blog;
