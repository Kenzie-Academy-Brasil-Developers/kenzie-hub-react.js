import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { LoginPage, RedirectRegister } from "./style";




const Login = ({ setAuthentic }) => {
    const { register, handleSubmit } = useForm();
    
    const history = useHistory()

  const onSubmit = (data) => {
    console.log(data);

    axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then((resp) => {
        console.log(resp);
        window.localStorage.clear();
        window.localStorage.setItem("authToken", resp.data.token);
        // setAuthentic(true);
        history.push(`/home/${resp.data.user.name}/${resp.data.user.course_module}`)
      })
      .catch((err) => console.log(err));
    };
    
    const redirectRegister = () => {
        history.push('/')
    }

  return (
    <>
      <LoginPage>
      
        <h1>Kenzie Hub</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='formLogin'>

          <h3>Login</h3>

          <label>
            E-mail
            <input placeholder="Digite seu e-mail" {...register("email")} />
          </label>
          <label>
            Senha
            <input
              placeholder="Informe sua senha"
              type="password"
              {...register("password")}
            />
          </label>
          <button className="btnLogin" type="submit">Fazer login!</button>
        </form>
        <RedirectRegister className="redirectRegister">
                <h6>Não possui cadastro?</h6>
                <button className="btnRedirectRegister" onClick={redirectRegister}>Clique Aqui!</button>
      
        </RedirectRegister>
      
      </LoginPage>
      </>
  );
};

export default Login;
