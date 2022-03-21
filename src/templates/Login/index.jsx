import { InitLayout } from "../../layouts/InitLayout";
import { useState } from "react";
import { Input } from "../../components/Input";
import { loginUser } from "../../api/User/loginUser";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let userLogged = {};

    try {
      userLogged = await loginUser(email, password);
    } catch (e) {
      console.log(e);
    }

    console.log(userLogged);
    setLoading(false);
  };

  return (
    <InitLayout
      linkTo="/cadastro"
      linkText="Não tem uma conta? Cadastre-se!"
      buttonText="Entrar"
      onSubmit={onSubmit}
      loading={loading}
    >
      <Input placeholder="email" type="email" value={email} setValue={setEmail} name="email" required />
      <Input placeholder="senha" type="password" value={password} setValue={setPassword} name="password" required />
    </InitLayout>
  );
};