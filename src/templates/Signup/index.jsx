import { InitLayout } from "../../layouts/InitLayout";
import { useState } from "react";
import { Input } from "../../components/Input";
import { signupUser } from "../../api/User/signupUser";

export const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let userCreated = {};

    try {
      userCreated = await signupUser(email, password, name, photo);
    } catch (e) {
      console.log(e);
    }

    console.log(userCreated);
    setLoading(false);
  };

  return (
    <InitLayout
      linkText="Já tem uma conta? Faça login!"
      loading={loading}
      linkTo="/"
      onSubmit={onSubmit}
      buttonText="Cadastrar"
    >
      <Input value={email} placeholder="email" name="email" setValue={setEmail} type="email" required />
      <Input value={password} placeholder="senha" name="password" setValue={setPassword} type="password" required />
      <Input value={name} placeholder="nome" name="name" setValue={setName} type="text" required />
      <Input value={photo} placeholder="foto" name="photo" setValue={setPhoto} type="text" required />
    </InitLayout>
  );
};