import { useForm } from "react-hook-form";
import { useContext } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { Container, Logotipo } from "./login.style.js";
import { UserContext } from "../../contexts/UserContexts";

const schema = yup.object({
  email: yup.string().email().required("Email Obrigatório!"),
  password: yup
    .string()
    .min(8, "Min 8 Caracteres, 1 núm, 1 letra e um caracter especial!")
    .required(),
});

const Login = () => {

  const {SignIn} = useContext(UserContext);

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  return (
    <>
      <Logotipo src={Logo} alt="" />
      <Container onSubmit={handleSubmit(SignIn)}>
        <h2>Login</h2>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">Senha</label>
        <input type="password" id="password" {...register("password")} />
        <span>{errors.password?.message}</span>

        <button className="btnEntrar" type="submit">
          Entrar
        </button>

        <p>Ainda não possui uma Conta ?</p>

        <button
          className="btnCadastrar"
          onClick={() => {
            navigate("/register");
          }}
        >
          Cadastre-se
        </button>
      </Container>
    </>
  );
};

export default Login;
