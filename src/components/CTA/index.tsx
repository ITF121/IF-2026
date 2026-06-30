import React from "react";
import styled from "styled-components";
import { useInView } from "../../hooks/useInView";

interface CTAProps {
  text: string;
  showButton?: boolean;
}

const CTA: React.FC<CTAProps> = ({ text, showButton = true }) => {
  const { ref, isVisible } = useInView<HTMLElement>(0.2);

  return (
    <>
      <Container ref={ref} $visible={isVisible}>
        <Content>
          {showButton && (
            <Text dangerouslySetInnerHTML={{ __html: text }}></Text>
          )}

          <CTAButton href="mailto:ines.imaginethefuture@gmail.com">
            Start a conversation{" "}
            <text style={{ color: "#b08a4f" }}>→ </text>{" "}
          </CTAButton>
        </Content>
      </Container>
    </>
  );
};

export default CTA;

const Container = styled.section<{ $visible: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: ${({ $visible }) =>
    $visible ? "translateY(0px)" : "translateY(40px)"};

  transition:
    opacity 0.9s ease-out,
    transform 0.9s ease-out;

  @media (min-width: 768px) {
    margin-top: 5rem;
  }
`;

const Content = styled.div`
  text-align: left;
  margin-left: 10%;
  @media (min-width: 768px) {
    text-align: left;
    margin-left: 0%;
  }
`;

const CTAButton = styled.a`
  color: #000;
  border: none;
  background-color: transparent;
  font-size: 0.9rem;
  font-family: "Inter", serif;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 2px;
  display: inline-block;
  text-decoration: none;
  margin-top: 1rem;
  font-weight: 600;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

const Text = styled.p`
  font-family: "Inter", serif;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 1.4;
  }
`;
