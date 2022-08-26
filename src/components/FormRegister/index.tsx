import { Form, Section } from "./style.FormLogin";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { IUserCadastro } from "../../contexts/UserContexts";
import React from "react";

const FormCadastro = () => {
  // SCHEMA, REQUISIÇÕES DE DOS INPUTS
  const formSchema = yup.object().shape({
    name: yup.string().required("Preencha seu nome"),
    email: yup.string().required().email(),
    password: yup
      .string()
      .required("Senha invalida")
      .min(8, "No minimo 8 caracteres"),
    confirmPassword: yup
      .string()
      .required("Senha deve ter 8 caracteres")
      .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha"),
    bio: yup.string().required().min(10),
    contact: yup.string().required().min(11),
    course_module: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserCadastro>({
    resolver: yupResolver(formSchema),
  });

  // STYLE ERROR CONFIRME SENHA
  const styleErrors = {
    fontSize: "10px",
    color: "var(--error)",
    height: "10px",
    margin: "-0.6rem 0 0 2rem",
  };

  const { onSubmitCadastrar } = useContext(UserContext);

  return (
    <>
      <Section>
        <div>
          <h2>Crie sua conta</h2>
          <span>Rapido e grátis, vamos nessa</span>
        </div>
        <Form onSubmit={handleSubmit(onSubmitCadastrar)}>
          <label htmlFor="nome">Nome *</label>
          <input
            id="nome"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />

          <label htmlFor="email">Email *</label>
          <input
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />

          <label htmlFor="senha">Senha *</label>
          <input
            id="senha"
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />

          <label htmlFor="confirme-senha">Confirmar senha *</label>
          <input
            type="text"
            id="confirme-senha"
            placeholder="Digite novamente sua senha"
            {...register("confirmPassword")}
          />
          <p style={styleErrors}>{errors.confirmPassword?.message}</p>

          <label htmlFor="bio">Bio *</label>
          <input id="bio" placeholder="Fala sobre você" {...register("bio")} />

          <label htmlFor="contato">Contato *</label>
          <input
            type="number"
            id="contato"
            placeholder="Opções de contato"
            {...register("contact")}
          />

          <label htmlFor="modulo">Selecionar Modulo *</label>
          <select id="modulo" {...register("course_module")}>
            <option value="Primeiro modulo (Introdução Front-end)">
              Primeiro modulo
            </option>
            <option value="Segundo modulo (API's)">Segundo modulo</option>
            <option value="Terceiro modulo (React)">Terceiro modulo</option>
            <option value="Quarto modulo (Introdução Back-end)">
              Quarto modulo
            </option>
            <option value="Quinto modulo (Back-end)">Quinto modulo</option>
            <option value="Sexto modulo (Back-end)">Sexto modulo</option>
          </select>

          <button type="submit">Cadastrar</button>
        </Form>
      </Section>
    </>
  );
};
export default FormCadastro;