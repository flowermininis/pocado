import axios from "axios";

const API_URL = "http://localhost:5000/api/users/user/";

// retreive user information based on id
const getUser = async (id) => {
  const response = await axios.get(API_URL + id);

  if (response.data) {
    localStorage.setItem("userInfo", JSON.stringify(response.data));
  }

  return response.data;
};

const displayUsersService = {
  getUser,
};

export default displayUsersService;
