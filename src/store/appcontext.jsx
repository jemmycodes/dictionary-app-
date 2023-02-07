import React from "react";

const appContext = React.createContext({
  search: [],
  error: "",
  isLoading: false,

  fetchData: (input) => {},
});

export default appContext;
