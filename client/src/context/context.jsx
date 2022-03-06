import { useContext, createContext } from "react";

export const UserContext = createContext();
export const useAppContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const contextValue = {};

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
