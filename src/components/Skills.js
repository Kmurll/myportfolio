import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPython, FaFlask } from 'react-icons/fa';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel 
                responsive={responsive} 
                infinite={true} 
                autoPlay={true} 
                autoPlaySpeed={5000} // Speed of autoPlay in milliseconds
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <FaHtml5 size={60} color="#E34F26" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <FaCss3Alt size={60} color="#1572B6" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <FaJsSquare size={60} color="#F7DF1E" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <FaReact size={60} color="#61DAFB" />
                  <h5>React</h5>   
                </div>
                <div className="item">
                  <FaPython size={60} color="#3776AB" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <FaFlask size={60} color="#000000" />
                  <h5>Flask</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

export default Skills;
