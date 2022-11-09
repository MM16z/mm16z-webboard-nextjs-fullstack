import axios from "axios";

const getUserAuth = () => {
  const response = axios.post(
    "http://localhost:3001/jwtauth",
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
