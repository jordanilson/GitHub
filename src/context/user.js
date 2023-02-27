import { useState, createContext } from "react";
export const UserContext = createContext({});

function UserProvider({ children }) {
  const [input, setInput] = useState([]);
  const [header, setHeader] = useState([]);

  return (
    <UserContext.Provider
      value={{ input, setInput, header, setHeader}}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
