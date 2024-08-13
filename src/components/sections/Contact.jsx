import React from "react";
import styled from "styled-components";
import EarthCanvas from "../canvas/Earth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactInfo = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  background: ${({ theme }) => theme.background_secondary}; // Match the theme
`;

const InfoTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const InfoItem = styled.div`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

const BoldText = styled.span`
  font-weight: 600; // Make the text bold
`;


const Link = styled.a`
  color: ${({ theme }) => theme.primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <EarthCanvas />
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or opportunities!
        </Desc>
        <ContactInfo>
          <InfoTitle>Contact Information</InfoTitle>
          <InfoItem> <BoldText>📧 Email:</BoldText> <Link href="mailto:jeffanojohn@gmail.com">jeffanojohn@gmail.com</Link></InfoItem>
          <InfoItem> <BoldText>🤝 LinkedIn:</BoldText> <Link href="https://www.linkedin.com/in/jeffanojohn/" target="_blank" rel="noopener noreferrer">linkedin.com/in/jeffanojohn</Link></InfoItem>
        </ContactInfo>
      </Wrapper>
    </Container>
  );
};

export default Contact;
