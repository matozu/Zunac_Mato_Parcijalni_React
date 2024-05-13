import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = createContext();

export const useAppContext = () => {
 return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [user, setUser] = useState();
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(user.repos_url)
        .then((response) => setRepos(response.data))
        .catch((error) => console.log(error));
    }
  }, [user]);
  return (
    <AppContext.Provider
      value={{ inputValue, setInputValue, user, setUser, repos, setRepos }}
    >
      {children}
    </AppContext.Provider>
  );
};
