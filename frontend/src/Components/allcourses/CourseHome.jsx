import React from 'react';
import CoursesCard from './CoursesCard';
import OnlineCourses from './OnlineCourses';
import Back from '../common/Back';
import './courses.css';

const onlineCoursesData = [
  {
    id: 1,
    cover: 'cover1.jpg',
    hovercover: 'hovercover1.jpg',
    courseName: 'Course 1',
    course: 'Description of Course 1'
  },

];

const CourseHome = () => {
  return (
    <>
      <Back title="Explore Courses" />
      <CoursesCard />
      <OnlineCourses online={onlineCoursesData} />
    </>
  );
};

export default CourseHome;
