import React from "react";

const CourseItem = ({ course }) => {
  // ternary for enrollment status
  const enrollmentText = course.enrolled ? "Enrolled" : "Not enrolled";

  // conditional class-like styling via availability
  return (
    <div className="card">
      <h3>{course.name}</h3>
      <p>Level: {course.level}</p>
      <p>
        Status:{" "}
        <strong>
          {course.enrolled ? (
            <span className="enrolled">{enrollmentText}</span>
          ) : (
            <span className="not-enrolled">{enrollmentText}</span>
          )}
        </strong>
      </p>
    </div>
  );
};

const CourseDetails = ({ courses }) => {
  if (!courses) return <div>Courses loading...</div>;

  // filter to show only advanced courses as demonstration of conditional list transformation
  const advancedCourses = courses.filter((c) => c.level === "Advanced");

  return (
    <div>
      <div className="subsection">
        <h4>All Courses</h4>
        <div className="list">
          {courses.map((c) => (
            <CourseItem key={c.id} course={c} />
          ))}
        </div>
      </div>

      <div className="subsection">
        <h4>Advanced Courses (filtered)</h4>
        {advancedCourses.length > 0 ? (
          <div className="list">
            {advancedCourses.map((c) => (
              <CourseItem key={c.id} course={c} />
            ))}
          </div>
        ) : (
          <p>No advanced courses available.</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;
