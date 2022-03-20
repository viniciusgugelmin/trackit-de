import {InitLayout} from "../../layouts/InitLayout";
import {useState} from "react";
import {Input} from "../../components/Input";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <InitLayout
      linkTo="/"
      linkText="Não tem uma conta? Cadastre-se!"
      buttonText="Entrar"
      onSubmit={() => console.log("oi")}
    >
      <Input placeholder="email" type="email" value={email} setValue={setEmail} name="email"/>
      <Input placeholder="senha" type="password" value={password} setValue={setPassword} name="password"/>
    </InitLayout>
  );
};