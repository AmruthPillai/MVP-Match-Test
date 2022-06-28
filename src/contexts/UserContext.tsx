import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import UserService from "src/services/users";

type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
} | null;

interface UserStore {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}

const UserContext = createContext<UserStore>({
  user: null,
  setUser: () => {},
});

type Props = {
  children?: React.ReactNode;
};

const UserProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User>(null);

  const { data } = useQuery("users", UserService.fetchUsers);

  useEffect(() => {
    if (data?.data[0]) {
      setUser(data.data[0]);
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
