import styled from "styled-components";
import ListItem from "../List/ListItem";

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-block: 1rem;
  list-style: none;
`;

function Meaning(props) {
  const { definitions, synonyms } = props;

  const list = definitions.map((definition, index) => (
    <ListItem definition={definition.definition} key={index + 12} />
  ));

  const syn = synonyms.map((synonym) => synonym).join(", ");
  return (
    <li>
      <div className="mb-6 flex items-center">
        <h3>{props.speech} </h3>
        <p className="w-full h-[0.1rem] ml-7 bg-[#e9e9e9]"></p>
      </div>
      <div>
        <p className="text-[#cecece]">Meaning</p>
        <ListWrapper>{list}</ListWrapper>

        <span className="flex gap-7">
          <p> Synonyms</p>
          <p className="text-purple font-bold">{syn || "none"}</p>
        </span>
      </div>
    </li>
  );
}

export default Meaning;
