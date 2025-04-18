import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import yearOneCourses from "../utils/yearOneCourses";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import NotFound from "../pages/NotFound";
import Reflections from "../pages/Reflections";
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
      <Route path="/courses/year3" element={<Year3 />} />
      <Route path="/reflections" element={<Reflections />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
