import styled from "styled-components";
import { Link } from "react-router-dom";

import bookIcon from "../../assets/icons/book-fill.svg";
import calendarIcon from "../../assets/icons/calendar2-fill.svg";
import graphIcon from "../../assets/icons/bar-chart-fill.svg";
import gearIcon from "../../assets/icons/gear-fill.svg";
import doorIcon from "../../assets/icons/door-open-fill.svg";

const NavbarWrapper = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledNavbar = styled.div`
  padding-top: 50px;
  padding-bottom: 1.5em;
  width: 55px;
  height: 100%;
  background-color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NavIcon = styled.img`
  width: 25px;
  height: 25px;
  filter: invert(80%);
`;

const StyledLink = styled(Link)`
  margin-bottom: ${props => props.noMargin ? "0" : "1.5em" };
`;

const BottomNavWrapper = styled.div`
  flex: 1 1 0%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
`;

const Navbar = () => (
  <NavbarWrapper>
    <StyledNavbar>
      <StyledLink to="/recipes">
        <NavIcon src={bookIcon} />
      </StyledLink>
      <StyledLink to="/meal-planner">
        <NavIcon src={calendarIcon} />
      </StyledLink>
      <StyledLink to="/nutrition">
        <NavIcon src={graphIcon} />
      </StyledLink>
      <StyledLink to="/settings">
        <NavIcon src={gearIcon} />
      </StyledLink>

      <BottomNavWrapper>
        <StyledLink to="/" noMargin>
          <NavIcon src={doorIcon}  />
        </StyledLink>
      </BottomNavWrapper>
    </StyledNavbar>
  </NavbarWrapper>
);

export default Navbar;