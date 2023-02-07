import styled from "styled-components";

const List = styled.ul`
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
`;

function ListItem(props) {
  return (
    <List>
      <span className="custom-dot"></span>
      <p>{props.definition}</p>
    </List>
  );
}

export default ListItem;
