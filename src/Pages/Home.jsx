import React from 'react';
import styled from 'styled-components';
import myPhoto from '../assets/Image_20240810_152836_718.jpeg'; // Path to your photo

// Styled Components for a modern theme
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  font-family: 'Arial', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    padding: 20px;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif; // Example of using a different font
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: #777;
  margin-bottom: 20px;
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  border: 5px solid #f39c12;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1); /* Slightly enlarge the profile image on hover */
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: #f39c12;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e67e22;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Content>
        <ProfileImage 
          src={myPhoto} 
          alt="My Profile" 
          onError={(e) => e.target.src = 'fallback-image-url.jpg'} // Replace with your fallback image URL
        />
        <Title>Welcome to My Portfolio</Title>
        <Subtitle>I'm a passionate developer ready to create amazing things!</Subtitle>
        <Button href="/contact">Contact Me</Button>
      </Content>
    </HomeContainer>
  );
};

export default Home;
