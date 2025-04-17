import CourseCard from "../components/CourseCard";
import yearOneCourses from "../utils/yearOneCourses";
import "../styles/CourseCard.css";

export default function Year1() {
  return (
    <div className="year-page">
      <h1> Year 1 - Courses </h1>
      <div className="courses-grid">
        {yearOneCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.title}
            to={course.path}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}
