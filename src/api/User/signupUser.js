import axios from "axios";

export const signupUser = async (email, password, name, image) => {
  const request = await axios.post(`${process.env.REACT_APP_API_URL}/auth/sign-up`, {
    email,
    password,
    name,
    image,
  });

  return await request.data;
};