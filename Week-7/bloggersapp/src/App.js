import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";
import "./App.css";

const sampleBooks = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin", available: true },
  { id: 2, title: "The Pragmatic Programmer", author: "Andrew Hunt", available: false },
  { id: 3, title: "You Don't Know JS", author: null, available: true }, // missing author
];

const sampleBlogs = [
  { id: 101, title: "React Patterns", author: "Dan Abramov", tags: ["react", "patterns"] },
  { id: 102, title: "Understanding JavaScript Closures", author: "Kyle Simpson", tags: [] },
  { id: 103, title: "Async/Await Deep Dive", author: null, tags: ["javascript", "async"] }, // missing author
];

const sampleCourses = [
  { id: "C1", name: "Frontend Web Dev", level: "Beginner", enrolled: true },
  { id: "C2", name: "Data Structures", level: "Intermediate", enrolled: false },
  { id: "C3", name: "Machine Learning", level: "Advanced", enrolled: true },
];

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);
  const [filterBlogTag, setFilterBlogTag] = useState("");

  const filteredBlogs = filterBlogTag
    ? sampleBlogs.filter((b) => b.tags.includes(filterBlogTag))
    : sampleBlogs;

  return (
    <div className="app-container">
      <h1>BloggerApp Dashboard</h1>

      <div className="toggles">
        <label>
          <input
            type="checkbox"
            checked={showBooks}
            onChange={() => setShowBooks((v) => !v)}
          />
          Show Books
        </label>
        <label>
          <input
            type="checkbox"
            checked={showBlogs}
            onChange={() => setShowBlogs((v) => !v)}
          />
          Show Blogs
        </label>
        <label>
          <input
            type="checkbox"
            checked={showCourses}
            onChange={() => setShowCourses((v) => !v)}
          />
          Show Courses
        </label>
      </div>

      {showBooks && (
        <section>
          <h2>Book Details</h2>
          <BookDetails books={sampleBooks} />
        </section>
      )}

      {showBlogs && (
        <section>
          <h2>Blog Details</h2>
          <div className="filter">
            <label>
              Filter by tag:{" "}
              <input
                value={filterBlogTag}
                placeholder="e.g., react"
                onChange={(e) => setFilterBlogTag(e.target.value.trim())}
              />
            </label>
            <small>
              {filterBlogTag
                ? `Showing blogs tagged with "${filterBlogTag}"`
                : "No tag filter applied"}
            </small>
          </div>
          <BlogDetails blogs={filteredBlogs} noResultsMessage={`No blogs match "${filterBlogTag}"`} />
        </section>
      )}

      {showCourses && (
        <section>
          <h2>Course Details</h2>
          <CourseDetails courses={sampleCourses} />
        </section>
      )}
    </div>
  );
}

export default App;
