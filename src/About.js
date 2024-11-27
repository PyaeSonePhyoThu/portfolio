import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;

export const About = () => {
  return (
    <AboutContainer>
      <Heading>About Me</Heading>
      <Text>
        I am a passionate penetration tester and bug bounty hunter with expertise in web application and infrastructure security. 
        Certified in OSCP and EWPT, I thrive on uncovering vulnerabilities and securing systems.
      </Text>
    </AboutContainer>
  );
};
