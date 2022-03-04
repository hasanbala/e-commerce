import { useContext, useState, createContext } from "react";

export const UserContext = createContext();
export const useAppContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [logname, setLogname] = useState("");
  const [logmail, setLogmail] = useState("");
  const [log, setLog] = useState(false);

  const contextValue = {
    logname,
    setLogname,
    logmail,
    setLogmail,
    log,
    setLog,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
