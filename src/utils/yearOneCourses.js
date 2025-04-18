import DIT043 from "../pages/courseDetails/dit043_oop";
import DIT023 from "../pages/courseDetails/dit023_math";
import DIT094 from "../pages/courseDetails/dit094_team";
import DIT046 from "../pages/courseDetails/dit046_req";
import DIT182 from "../pages/courseDetails/dit182_struc";
import DIT033 from "../pages/courseDetails/dit033_data";
import DIT185 from "../pages/courseDetails/dit185_soft";
import DIT113 from "../pages/courseDetails/dit113_system";

const yearOneCourses = [
  {
    id: 1,
    title: "Object-Oriented Programming - DIT043",
    path: "/courses/year1/dit043",
    component: DIT043,
    image: require("../assets/images/courses/dit043_oop.jpg"),
  },
  {
    id: 2,
    title: "Mathematical Foundations for Software Engineering - DIT023",
    path: "/courses/year1/dit023",
    component: DIT023,
    image: require("../assets/images/courses/dit023_math.png"),
  },
  {
    id: 3,
    title: "Mini Project: Team Programming - DIT094",
    path: "/courses/year1/dit094",
    component: DIT094,
    image: require("../assets/images/courses/dit094_team.png"),
  },
  {
    id: 4,
    title: "Requirements and User Experience - DIT046",
    path: "/courses/year1/dit046",
    component: DIT046,
    image: require("../assets/images/courses/dit046_req.png"),
  },
  {
    id: 5,
    title: "Data Structures and Algorithms - DIT182",
    path: "/courses/year1/dit182",
    component: DIT182,
    image: require("../assets/images/courses/dit182_datastructure.webp"),
  },
  {
    id: 6,
    title: "Data Management - DIT033",
    path: "/courses/year1/dit033",
    component: DIT033,
    image: require("../assets/images/courses/dit033_datamanagement.jpg.webp"),
  },
  {
    id: 7,
    title: "Software Analysis and Design - DIT185",
    path: "/courses/year1/dit185",
    component: DIT185,
    image: require("../assets/images/courses/dit185_software.jpg"),
  },
  {
    id: 8,
    title: "Mini Project: System Development - DIT113",
    path: "/courses/year1/dit113",
    component: DIT113,
    image: require("../assets/images/courses/dit113_system.jpg"),
  },
];

export default yearOneCourses;
