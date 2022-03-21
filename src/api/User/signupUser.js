import axios from "axios";

export const signupUser = async (email, password, name, photo) => {
  const request = await axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, {
    email,
    password,
    name,
    photo,
  });

  return await request.data;
};