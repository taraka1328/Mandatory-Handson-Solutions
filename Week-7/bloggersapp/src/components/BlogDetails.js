import React from "react";

const BlogItem = ({ blog }) => {
  // object lookup as switch alternative for tag summary
  const tagSummary = () => {
    if (blog.tags && blog.tags.length > 0) {
      return blog.tags.map((t, i) => (
        <span key={i} className="tag">
          {t}
        </span>
      ));
    }
    return <span className="no-tags">No tags</span>;
  };

  return (
    <div className="card">
      <h3>{blog.title}</h3>
      <p>
        By: {blog.author ? blog.author : <em>Anonymous author</em>}
      </p>
      <div className="tags">
        Tags: {tagSummary()}
      </div>
    </div>
  );
};

const BlogDetails = ({ blogs, noResultsMessage }) => {
  if (!blogs) return <div>Loading blogs...</div>;

  if (blogs.length === 0)
    return <div className="empty">{noResultsMessage || "No blogs available."}</div>;

  return (
    <div className="list">
      {blogs.map((b) => (
        <BlogItem key={b.id} blog={b} />
      ))}
    </div>
  );
};

export default BlogDetails;
