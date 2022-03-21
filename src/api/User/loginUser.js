import axios from "axios";

export const loginUser = async (email, password) => {
  const request = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
    email,
    password,
  });

  return await request.data;
};