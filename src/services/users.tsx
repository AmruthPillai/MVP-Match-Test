import { API_BASE_URL } from "src/constants";

const UserService = {
  fetchUsers: () => fetch(API_BASE_URL + "/users").then((res) => res.json()),
};

export default UserService;
