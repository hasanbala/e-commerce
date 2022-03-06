import { useContext, createContext, useState, useEffect } from "react";
import { fetchOut, fetchProfile } from "../pages";

const UserContext = createContext(null);
export const AppUseContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchProfile();
        setLogged(true);
        setUser(me);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLogged(true);
    setUser(data.user);
    localStorage.setItem("access-token", data.accessToken);
    localStorage.setItem("refresh-token", data.refreshToken);
  };

  const logout = async () => {
    setLogged(false);
    setUser(null);
    await fetchOut();
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
  };

  const contextValue = {
    user,
    logged,
    login,
    logout,
  };

  if (loading) {
    return (
      <div className="gotload">
        <div className="loading fa-8x">
          <i className="fas fa-spinner fa-spin"></i>
        </div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
