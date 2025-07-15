import DIT342 from "../pages/courseTwoDetails/dit342_web";
import DIT345 from "../pages/courseTwoDetails/dit345_arch";
import DIT348 from "../pages/courseTwoDetails/dit348_metho";
import DIT356 from "../pages/courseTwoDetails/dit356_distr";
import DIT633 from "../pages/courseTwoDetails/dit633_emb";
import DIT636 from "../pages/courseTwoDetails/dit636_testing";
import DIT639 from "../pages/courseTwoDetails/dit639_cyber";

const yearTwoCourses = [
  {
    id: 9,
    title: "Web Development - DIT342",
    path: "/courses/year2/dit342",
    component: DIT342,
    image: require("../assets/images/courses/dit342_web.jpeg"),
  },
  {
    id: 10,
    title: "Fundamentals of Software Architecture - DIT345",
    path: "/courses/year2/dit345",
    component: DIT345,
    image: require("../assets/images/courses/dit345_arch.png"),
  },
  {
    id: 11,
    title: "Mini Project: Distributed Systems Development - DIT356",
    path: "/courses/year2/dit356",
    component: DIT356,
    image: require("../assets/images/courses/dit356_distr.png"),
  },
  {
    id: 12,
    title: "Software Development Methodologies - DIT348",
    path: "/courses/year2/dit348",
    component: DIT348,
    image: require("../assets/images/courses/dit348_metho.png"),
  },
  {
    id: 13,
    title: "Software Quality and Testing - DIT636",
    path: "/courses/year2/dit636",
    component: DIT636,
    image: require("../assets/images/courses/dit636_testing.jpeg"),
  },
  {
    id: 14,
    title: "Development of Embedded and Real-Time Systems - DIT633",
    path: "/courses/year2/dit633",
    component: DIT633,
    image: require("../assets/images/courses/dit633_emb.png"),
  },
  {
    id: 15,
    title: "Cyber Physical Systems and Systems of Systems - DIT639",
    path: "/courses/year2/dit639",
    component: DIT639,
    image: require("../assets/images/courses/dit639_cyber.jpg"),
  },
];

export default yearTwoCourses;
