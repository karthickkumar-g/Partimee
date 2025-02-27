import { createContext, useState, useEffect } from "react";

export const userContext = createContext(); // ✅ Make sure this is exported

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(localStorage.getItem("isLoggedIn") || "");
  const [userType, setUserType] = useState(localStorage.getItem("UserType") || "");

  useEffect(() => {
    setUser(localStorage.getItem("isLoggedIn"));
    setUserType(localStorage.getItem("UserType"));
  }, []);

  return (
    <userContext.Provider value={{ user, userType }}>
      {children}
    </userContext.Provider>
  );
};
