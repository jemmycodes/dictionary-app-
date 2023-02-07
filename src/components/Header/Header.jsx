import logo from "../../assets/images/logo.svg";
import Toggle from "../UI/Toggle";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 2rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="App Logo" />
      <div className="flex items-center gap-2">
        <select className="focus:border-transparent outline-none border-0 outline-transparent">
          <option>Sans</option>
          <option>Serif</option>
          <option>Mono</option>
        </select>

        <Toggle />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
