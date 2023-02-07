import styled from "styled-components";
import { Header, Search, Word, Meaning, Spinner, NotFound } from "./components";
import newWindow from "./assets/images/icon-new-window.svg";
import { useContext } from "react";
import appContext from "./store/appcontext";

const Main = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.section`
  width: 100%;
  max-width: 650px;
  padding: 1rem 2rem;
  margin: 0 1rem;
`;

const WordWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const List = styled.ul`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding-bottom: 2rem;
  border-bottom: 1px solid #cecece;
`;

function App() {
  const { search: data, isLoading, error } = useContext(appContext);
  const [result] = data;

  const meanings = result?.meanings.map((meaning, index) => (
    <Meaning
      synonyms={meaning.synonyms}
      speech={meaning.partOfSpeech}
      definitions={meaning.definitions}
      url={result.sourceUrls}
      key={index}
    />
  ));

  const url = result?.sourceUrls[0];

  return (
    <Main>
      <Wrapper>
        <Header />
        <Search />
        {error === "not-found" ? (
          <NotFound />
        ) : (
          <>
            {isLoading ? (
              <Spinner />
            ) : (
              <>
                {data && (
                  <>
                    <WordWrapper>
                      <Word />
                      <List>{meanings}</List>
                    </WordWrapper>
                    <footer className="py-5 ">
                      <span className="flex gap-5">
                        <p className="text-[#cecece]"> Source:</p>
                        <a href={url} className="flex ">
                          {url}
                          <img src={newWindow} />
                        </a>
                      </span>
                    </footer>
                  </>
                )}
              </>
            )}
          </>
        )}
      </Wrapper>
    </Main>
  );
}

export default App;
