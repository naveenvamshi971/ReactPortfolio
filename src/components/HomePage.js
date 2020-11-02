import React from 'react';
import Title from './Title';
import About from './About';
import ProjectSection from './ProjectSection';
import BlogSection from './BlogSection';
import SkillSection from './SkillSection';
import RecommendationSection from './RecommendationSection';

function HomePage() {
    return (
        <div>
          <Title name="Naveen Vamshi" leadText="Hello there! I'm a developer "/>
          <RecommendationSection/>
          <ProjectSection/>
          <About/>
          <BlogSection/>
          <SkillSection/>
        </div>
    );
}


export default HomePage;
