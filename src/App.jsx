import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CourseInfo from "./components/CourseInfo/CourseInfo";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const apiToken = localStorage.getItem("apiToken");
    console.log("apiTOken", apiToken);
    if (!apiToken) {
      navigate("/login");
    }
  }, []);

  const [courseInfo, setCourseInfo] = useState(null);
  const selectCourseInfo = (course) => {
    setCourseInfo(course);
  };

  return (
    <>
      <Header />
      <div className="container">
        {courseInfo ? (
          <CourseInfo course={courseInfo} selectCourseInfo={selectCourseInfo} />
        ) : (
          <Courses selectCourseInfo={selectCourseInfo} />
        )}
      </div>
    </>
  );
};

export default App;
