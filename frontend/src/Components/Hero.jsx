import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <>
       <section className='hero'>
        <div className='container'>
          <div className='row'>
        
          <p>At EduOne, we believe that education should be accessible to everyone, everywhere. Our platform offers a wide range of courses designed to help you achieve your personal and professional goals. Whether you're looking to advance in your career, learn a new skill, or pursue a passion, we have the resources and support you need.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
      </>
  )
}

export default Hero