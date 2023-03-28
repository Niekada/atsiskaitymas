import { PropsWithChildren, createContext } from "react";

import { RegisterAndLoginSchema } from "../types/RegisterAndLoginSchema";
import { useLocalStorage } from "../hooks/localStorage";

const UserContext = createContext<{
  user: RegisterAndLoginSchema | null;
  setUser: (user: RegisterAndLoginSchema) => void;
  isLoggedIn: boolean;
  handleLogIn: (user: RegisterAndLoginSchema) => void;
  handleLogOut: () => void;
}>({
  user: null,
  setUser: () => {},
  isLoggedIn: false,
  handleLogIn: () => {},
  handleLogOut: () => {},
});

const UserProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useLocalStorage<RegisterAndLoginSchema | null>("user", null);

  const isLoggedIn = !!user;

  const handleLogIn = (user: RegisterAndLoginSchema) => {
    setUser(user);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, isLoggedIn, setUser, handleLogIn, handleLogOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
export { UserContext, UserProvider };