import CourseCard from "../components/CourseCard";
import yearTwoCourses from "../utils/yearTwoCourses";
import "../styles/CourseCard.css";

export default function Year2() {
  return (
    <div className="year-page">
      <h1> Year 2 - Courses </h1>
      <div className="courses-grid">
        {yearTwoCourses.map((course) => (
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
