import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import yearOneCourses from "../utils/yearOneCourses";
import yearTwoCourses from "../utils/yearTwoCourses";
import projects from "../utils/projects";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import NotFound from "../pages/NotFound";
import Projects from "../pages/Projects";
import Resources from "../pages/Resources";
import Year1 from "../pages/Year1";
import Year2 from "../pages/Year2";
import Year3 from "../pages/Year3";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/year1" element={<Year1 />} />
      {yearOneCourses.map((course) => (
        <Route
          key={course.id}
          path={course.path}
          element={<course.component />}
        />
      ))}
      <Route path="/courses/year2" element={<Year2 />} />
      {yearTwoCourses.map((course) => (
        <Route
          key={course.id}
          path={course.path}
          element={<course.component />}
        />
      ))}
      <Route path="/courses/year3" element={<Year3 />} />
      <Route path="/projects" element={<Projects />} />
      {projects.map((p) => (
        <Route key={p.id} path={p.path} element={<p.component />} />
      ))}
      <Route path="/resources" element={<Resources />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
