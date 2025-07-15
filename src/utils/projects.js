/* Individual project‑detail pages (or stubs) */
import BabyBuddy from "../pages/projectDetails/BabyBuddy";
import SmileSelect from "../pages/projectDetails/SmileSelect";
import SaunaBuddy from "../pages/projectDetails/SaunaBuddy";
import Embedded from "../pages/projectDetails/Embedded";
import Payroll from "../pages/projectDetails/PayrollSystem";

/**
 * Array of project metadata – same shape as yearOneCourses.
 * Extend freely as you add more projects.
 */
const projects = [
  {
    id: 1,
    title: "SaunaBuddy",
    path: "/projects/saunabuddy",
    component: BabyBuddy,
    image: require("../assets/images/courses/dit033_datamanagement.jpg.webp"),
    github: "https://github.com/Fnilsson95/SaunaBuddy",
  },
  {
    id: 2,
    title: "SmileSelect",
    path: "/projects/smileselect",
    component: SmileSelect,
    image: require("../assets/images/courses/dit033_datamanagement.jpg.webp"),
    github: "https://github.com/Fnilsson95/SmileSelect",
  },
  {
    id: 3,
    title: "BabyBuddy",
    path: "/projects/babybuddy",
    component: SaunaBuddy,
    image: require("../assets/images/courses/dit033_datamanagement.jpg.webp"),
    github: "https://github.com/Fnilsson95/BabyBuddy",
  },
  {
    id: 4,
    title: "Embedded Course",
    path: "/projects/embedded",
    component: Embedded,
    image: require("../assets/images/courses/dit033_datamanagement.jpg.webp"),
    github: "https://github.com/Fnilsson95/Embedded-Course",
  },
  {
    id: 5,
    title: "Payroll System",
    path: "/projects/payroll",
    component: Payroll,
    image: require("../assets/images/courses/dit033_datamanagement.jpg.webp"),
    github: "https://github.com/Fnilsson95/Payroll",
  },
];

export default projects;
