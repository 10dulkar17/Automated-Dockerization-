import styled from "styled-components";

export const Navbar = styled.div`
  margin: 0;
  padding: 0;
  color: #eee;
  padding: 15px;
  position: -webkit-sticky; /* Safari */
  position: sticky;
  height: 10px;
  display: flex;
  justify-content: flex-end;
  padding-block: 20px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondaryAlt};
`;

export const Menu = styled.nav`
  display: flex;
  justify-content: flex-end;

  & > a {
    text-decoration: none;
  }
`;
