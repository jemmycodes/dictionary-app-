import React, { useState } from "react";
import appContext from "./appcontext";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function AppProvider(props) {
  const [search, setSearch] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (input) => {
    try {
      setError("");
      if (input.trim().length === 0) {
        setError("no-words");
        return;
      }
      setIsLoading(true);
      const response = await fetch(`${url}${input}`);
      const data = await response.json();
      if (!response.ok) {
        setError("not-found");
        return;
      }
      setSearch(data);
      setIsLoading(false);
    } catch (error) {
      return <p className="font-bold  text-2xl">Error in connection!</p>;
    } finally {
      setIsLoading(false);
    }
  };

  const defaultState = {
    search,
    fetchData,
    error,
    isLoading,
  };

  return (
    <appContext.Provider value={defaultState}>
      {props.children}
    </appContext.Provider>
  );
}

export default AppProvider;
