import { useContext } from "react";
import styled from "styled-components";
import play from "../../assets/images/icon-play.svg";
import appContext from "../../store/appcontext";

const TextWrapper = styled.hgroup`
  display: flex;
  justify-content: space-between;
`;

function Word() {
  const { search } = useContext(appContext);
  const [result] = search;

  return (
    <TextWrapper>
      <div>
        <h1 className="font-bold text-3xl">{result?.word}</h1>
        <p className="text-purple mt-1">{result?.phonetic}</p>
      </div>
      <span>
        <img src={play} alt="play-icon" className="max-w-[3.5rem]" />
      </span>
    </TextWrapper>
  );
}

export default Word;
