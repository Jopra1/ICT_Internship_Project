import { useState, useEffect } from "react";
import axios from "axios";
import "./courses.css";

const CoursesCard = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:5999/coursedetails'); // Replace with your backend API endpoint
        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="coursesCard">
      <div className="container grid2">
        {courses.map((course, index) => (
          <div className="items" key={index}>
            <div className='context flex'>
              <div className="left">
                <div className='img'>
                  <img src={course.courseImage} alt={course.courseTitle} />
                </div>
              </div>
              <div className="text">
                <h1>{course.courseTitle}</h1>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <label htmlFor=''>({course.rating || "5.0"})</label>
                </div>
                <div className="details">
                  <div className="box">
                    <div className='dimg'>
                      <img src={course.instructorImage} alt={course.instructorName} />
                    </div>
                    <div className="para">
                      <h4>{course.instructorName}</h4>
                    </div>
                    <span>{course.totalTime}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="price">
              <h3>{course.priceAll}/{course.pricePer}</h3>
            </div>
            <button className='outline-btn'>ENROLL NOW</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoursesCard;
