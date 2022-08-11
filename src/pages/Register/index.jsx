import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'

import * as yup from 'yup'

import { FormRegister, HeaderRegister, MainRegister} from './style'

const Register = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Nome obrigatório")
      .matches(/^[a-zA-Z\s]+$/, "Seu nome não pode conter números"),
    
    email: yup.string().required("Email obrigatório").email("Email inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        /^(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Sua senha deve conter ao menos: Uma letra maiúscula, uma minúscula, um número e um caractere especial"
      )
      .min(8, "Mínimo 8 caracteres"),
    
    confirmPassword: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .oneOf([yup.ref("password")], "Senhas não são iguais"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
      resolver: yupResolver(formSchema)
    })

    const history = useHistory()
  
  const onSubmit = (data) => {
    console.log(data)


    axios.post('https://kenziehub.herokuapp.com/users', data)
        .then((response) => {
            console.log(response.data)
            window.localStorage.clear()
            window.localStorage.setItem('authToken', response.data.token)
        })
          .catch(err => console.log(err))
      
          history.push(`/login`)
      
    }
    
    const redirectLogin = () => {
        history.push('/login')
    }

  return (

    <FormRegister className='form'>
    <HeaderRegister className='headerRegister'>
      <h1>Kenzie Hub</h1>

      <button onClick={redirectLogin} className='btnRedirectLogin'>Já possui login?</button>
      </HeaderRegister>
      
      <MainRegister>
        <form onSubmit={handleSubmit(onSubmit)} className='formRegister'>

          <h3>Crie sua conta</h3>

          <p>Rápido e grátis, vamos nessa</p>
          <label>Nome<input placeholder='Digite seu nome'
            {...register('name')} /></label>
          {errors && <span>{errors.name?.message}</span>}

          <label>E-mail<input placeholder='Digite seu e-mail' 
            {...register('email')} /></label>
          {errors && <span>{errors.email?.message}</span>}

          <label>Senha<input placeholder='Digite sua senha' type="password"
            {...register('password')} /></label>
          {errors && <span>{errors.password?.message}</span>}

          <label>Confirme sua senha<input placeholder='Digite novamente sua senha' type="password" 
            {...register('confirmPassword')} /></label>
          {errors && <span>{errors.confirmPassword?.message}</span>}

          <label>Sua bio<input placeholder='Fale um pouco mais sobre você'{...register('bio')}/></label>

          <label>Contato<input placeholder='Opção para contato'{...register('contact')} /></label>
          {errors && <span>{errors.contact?.message}</span>}

          <label>
            Selecione um módulo
            <select {...register('course_module')}> 
            <option value="Primeiro módulo">Primeiro módulo</option>
            <option value="Segundo módulo">Segundo módulo</option>
              <option value="Terceiro módulo">Terceiro módulo</option>
              
              
            </select>
            {errors && <span>{errors.course_module?.message}</span>}
          </label>

          <button className='btnRegister' type='submit'>Cadastrar!</button>
          
          
        </form>
      </MainRegister>
    </FormRegister>

  );
}
export default Register