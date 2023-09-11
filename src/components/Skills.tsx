import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/Skills.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleCustomArrow(props: any) {
  const { sliderCustomArrows, onClick } = props;
  return (
    <div
      className={sliderCustomArrows}
      onClick={onClick}
    />
  );
}

const Skills = () => {
  

  const skillsData = [
    { skillName: 'Skill 1', percentage: 50 },
    { skillName: 'Skill 2', percentage: 75 },
    { skillName: 'Skill 3', percentage: 60 },
    { skillName: 'Skill 4', percentage: 20 },
    { skillName: 'Skill 5', percentage: 45 },
    
  ];

  const sliderSettings = {
    slidesToShow: 3, 
    slidesToScroll: 1,
    infinite: true,
    nextArrow: <SampleCustomArrow />,
    prevArrow: <SampleCustomArrow />
  };

  return (
    <div className='SkillsPage'>
        <div className='PageContent' >
            <h2><b> Skills </b></h2>
            <Slider {...sliderSettings}>
              {skillsData.map((skill, index) => (
                <div key={index} className='progressBar'>
                  <CircularProgressbar
                    value={skill.percentage}
                    text={`${skill.percentage}%`}
                    className="customProgressBar"
                  />
                  <p className='skillName'>{skill.skillName}</p>
                </div>
              ))}
            </Slider>
        </div>
    </div>
  )
}


export default Skills