import { AiOutlineSearch } from "react-icons/ai";
import { useContext, useState } from "react";
import styled from "styled-components";
import appContext from "../../store/appcontext";

const TextBox = styled.input`
  all: unset;
  width: 100%;
  background-color: #f4f4f4;
  border-radius: 0.5rem;
  padding: 0.7rem 1rem;
  font-weight: bold;

  &:focus {
    all: unset;
    width: 100%;
    background-color: #f4f4f4;
    border-radius: 0.5rem;
    padding: 0.7rem 1rem;
    font-weight: bold;
    border: 2px solid #a445ed;
  }

  &::placeholder {
    color: #cecece;
    font-weight: 400;
  }
`;

const ErrorText = styled.p`
  color: rgb(255, 82, 82);
  margin-top: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

function Input() {
  const { fetchData, error } = useContext(appContext);
  const [search, setSearch] = useState("");
  // const [touched, setTouched] = useState(false)

  const sendInputData = (e) => {
    e.preventDefault();
    fetchData(search);
    setSearch("");
  };

  const inputIsValid = search.length > 1;

  const setSearchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form onSubmit={sendInputData}>
      <div>
        <TextBox
          type="text"
          value={search}
          placeholder="Search for any word..."
          onChange={setSearchHandler}
        />
        <AiOutlineSearch
          className="search-icon cursor-pointer"
          onClick={sendInputData}
        />
      </div>
      {error === "no-words" && !inputIsValid && (
        <ErrorText>Whoops, can't be empty</ErrorText>
      )}
    </form>
  );
}

export default Input;
