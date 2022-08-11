import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 100%;
  display: flex;
`;
export const NavMenu = styled.aside`
  border: 1px solid;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border-left-color: transparent;
  border-right-color: ${(props) => props.theme.colors.secondary};
  border-top-color: transparent;
  border-bottom-color: transparent;

  width: 100px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primary};
`;
export const Content = styled.main`
  background-color: ${(props) => props.theme.colors.secondaryAlt};
  border-radius: 15px;
  margin: 30px;
  width: 100%;
  display: flex;
`;
