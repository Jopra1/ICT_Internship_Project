
import PropTypes from 'prop-types';
import Title from '../common/Title';
import './courses.css';

const OnlineCourses = ({ online }) => {
  return (
    <section className='online'>
      <div className='container'>
        <Title subtitle='COURSES' title='Browse Our Online Courses' />
        <div className="content grid3">
          {online.map((val) => (
            <div className='box' key={val.id}>
              <div className='img'>
                <img src={val.cover} alt="" />
                <img src={val.hovercover} alt="" className='show' />
              </div>
              <h1>{val.courseName}</h1>
              <span>{val.course}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Adding PropTypes for validation
OnlineCourses.propTypes = {
  online: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    cover: PropTypes.string.isRequired,
    hovercover: PropTypes.string.isRequired,
    courseName: PropTypes.string.isRequired,
    course: PropTypes.string.isRequired,
  })).isRequired,
};

export default OnlineCourses;
