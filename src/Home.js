import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1rem;
`;

const SocialLinks = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;

  a {
    color: #c9d1d9;
    font-size: 1.5rem;
    transition: color 0.3s;

    &:hover {
      color: #58a6ff;
    }
  }
`;

export const Home = () => {
  return (
    <HomeContainer>
      <Title>Pyae Sone Phyo Thu</Title>
      <Subtitle>Penetration Tester | Bug Bounty Hunter</Subtitle>
      <SocialLinks>
        <a href="https://github.com/PyaeSonePhyoThu" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/pyae-sone-phyo-thu-982735243" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </SocialLinks>
    </HomeContainer>
  );
};
