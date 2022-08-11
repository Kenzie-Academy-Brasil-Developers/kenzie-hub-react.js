import { useHistory, useParams } from "react-router-dom";
import { Header, Home, Title, Title2, Text} from "./style.js";

const HomeCard = () => {
  const { name } = useParams()
  
    const history = useHistory();

    const exit = () => {
        window.localStorage.clear()
        history.push("/login")
    }

    return (
        <>
        <Home className="home">
          <Header className="headerLogin">
            <h1>Kenzie Hub</h1>

            <button className="btnExit"
              onClick={exit}>Voltar/Sair</button>
          </Header>

          <Title>Olá, {name}</Title>
    
          <div>
            <Title2>Que pena! Estamos em desenvolvimento ;-;</Title2>
            <Text>Nossa aplicação está em desenvolvimento, em breve termos novidades!</Text>
          </div>
                
        </Home>
            </>
  )
}
export default HomeCard