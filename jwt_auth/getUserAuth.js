import axios from "axios";

const getUserAuth = () => {
  const response = axios.post(
    "https://mm16-webboard.herokuapp.com/jwtauth",
    JSON.stringify({}),
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }
  );
  return response;
};

export default getUserAuth;
