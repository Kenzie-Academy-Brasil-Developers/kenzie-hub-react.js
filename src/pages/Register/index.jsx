import { Container, Header } from "./register.style.js";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Logotipo from "../../assets/Logo.png";
import api from "../../api/api.js";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

const schema = yup.object({
  name: yup.string().required("Nome completo obrigatório!"),
  email: yup.string().required("Necessário Email válido!").email(),
  password: yup
    .string()
    .min(8, "Min 8 Caracteres, 1 núm, 1 letra e um caracter especial!")
    .matches(/(\W)|_/)
    .required(),
  confirmPassword: yup
    .string()
    .min(8, "Necessita ser igual a senha!")
    .matches(/(\W)|_/)
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
  contact: yup.string().min(9, "Telefone Obrigatório, 9 digitos").required(),
});

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerUser(data) {
    api
      .post("/users", data)
      .then((response) => {
        console.log("CONSOLE LOG do Response do Registro",response);
        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error("Houve algum erro!", {
          position: "top-right",
          autoClose: 5000,
        });
        console.log(error);
      });
  }

  return (
    <>
      <Header>
        <img src={Logotipo} alt="" />
        <button
          onClick={() => {
            navigate("/")
          }}
        >
          Voltar
        </button>
      </Header>

      <Container onSubmit={handleSubmit(registerUser)}>
        <h2>Crie sua conta</h2>
        <p>Rápido e grátis, vamos nessa !</p>

        <label htmlFor="name">* Nome Completo</label>
        <input type="text" id="name" {...register("name")} />
        <span>{errors.name?.message}</span>

        <label htmlFor="email">* E-Mail</label>
        <input type="text" id="email" {...register("email")} />
        <span>{errors.email?.message}</span>

        <label htmlFor="password">* Senha</label>
        <input type="password" id="password" {...register("password")} />
        <span>{errors.password?.message}</span>

        <label htmlFor="confirmPassword">* Confirmar Senha</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        <span>{errors.confirmPassword?.message}</span>

        <label htmlFor="bio">Bio</label>
        <input type="text" id="bio" {...register("bio")} />

        <label htmlFor="contact">* Contato</label>
        <input type="text" id="contact" {...register("contact")} />
        <span>{errors.contact?.message}</span>

        <label htmlFor="course_module">* Selecionar Modulo</label>
        <select
          id="course_module"
          {...register("course_module")}
          required="Escolha um Modulo!"
        >
          <option value="Modulo 1 (CSS & HTML BÁSICO)">Modulo 1 </option>
          <option value="Modulo 2 (CSS, HTML & JS INTERMEDIÁRIO)">Modulo 2</option>
          <option value="Modulo 3 (CSS, HTML, JS & REACT AVANÇADO)">Modulo 3</option>
          <option value="Modulo 4">Modulo 4</option>
          <option value="Modulo 5">Modulo 5</option>
          <option value="Modulo 6">Modulo 6</option>
          
        </select>
        <span>{errors.module?.message}</span>

        <button type="submit">Finalizar Cadastro</button>
      </Container>
    </>
  );
};

export default Register;
