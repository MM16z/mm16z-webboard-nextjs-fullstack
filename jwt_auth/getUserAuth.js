import axios from "axios";

const getUserAuth = () => {
  const response = axios.post(
    "http://13.214.139.99:1616/jwtauth",
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
