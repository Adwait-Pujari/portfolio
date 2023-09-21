import React, {} from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Skills.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// function SampleCustomArrow(props: any) {
//   const { sliderCustomArrows, onClick } = props;
//   return (
//     <div
//       className={sliderCustomArrows}
//       onClick={onClick}
//     />
//   );
// }

const Skills = () => {
  const skillsData = [
    { skillName: 'Java', percentage: 80 },
    { skillName: 'C#', percentage: 75 },
    { skillName: 'Android Studio', percentage: 85 },
    { skillName: 'Angular', percentage: 60 },
    { skillName: 'React', percentage: 50 },
    { skillName: 'HTML & CSS', percentage: 85 },
    { skillName: 'Database System', percentage: 65 },
    
  ];

  const sliderSettings = {
    slidesToShow: 3, 
    slidesToScroll: 1,
    infinite: true,
  };

  return (
    <section className='SkillsPage' id='skills'>
        <div className='PageContent' >
          <span>
            <h2><b> Skills </b></h2>
            <h5> 
            Explore my technical arsenal below – a showcase of my proficiency in various programming languages, tools, and technologies.
            </h5>
          </span>
            <Slider {...sliderSettings}>
              {skillsData.map((skill, index) => (
                <div key={index} className='progressBar'>
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    styles={{
                      path: {
                        stroke: '#008080', // Change the color to your desired green shade
                      },
                      text: {
                        fill: '#008080', // Change the text color to match the bar color
                      },
                    }}
                    className="customProgressBar"
                  />
                  <p className='skillName'>{skill.skillName}</p>
                </div>
              ))}
            </Slider>
        </div>
    </section>
  )
}


export default Skills