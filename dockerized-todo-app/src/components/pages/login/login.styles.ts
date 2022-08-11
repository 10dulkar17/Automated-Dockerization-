import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  width: 100%;
  height: 100%;
  place-content: center;
  place-items: center;

  @media (max-width: 414px) {
    height: 100%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondaryAlt};
  padding: 100px;

  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;

  @media (max-width: 414px) {
    width: auto;
    height: fit-content;
    padding: 50px;
    border-radius: 15px;
    place-content: start;
    place-items: start;
  }
`;

export const RightBox = styled.div<{ src: string }>`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 500px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 15px;

  @media (max-width: 1136px) {
    display: none;
  }
`;
