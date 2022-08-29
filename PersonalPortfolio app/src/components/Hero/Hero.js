import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome Everybody to <br />
          My Personal Portfolio <span style={{"fontSize":"2.2rem"}}>built by ReactJs and NextJs</span>
        </SectionTitle>
        <SectionText>
        Enthusiastic full-stack web developer, aiming mainly towards creating fully-functional responsive web applications. Interested in working together? drop me a message. 
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;