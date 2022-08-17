import RenderAddTechnology from "./modalAddTech";
import { UserContext } from "../../contexts/UserContexts";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { DivNovidades, Header, Main } from "./home.style.js";
import { MdAddComment } from "react-icons/md";
import Logo from "../../assets/Logo.png";
import CreateTechnology from "../ModalCreateTech/index";

const Home = () => {
  const { user, loading, setModalIn } =
    useContext(UserContext);

  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  if (loading) return <div> CARREGANDO ... </div>;

  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="" />
          <button onClick={logout}>Sair</button>
        </div>
      </Header>

      <Main>
        {user ? (
          <div key={user.id}>
            <h2> Olá, {user.name}</h2>
            <span>{user.course_module}</span>
          </div>
        ) : (
          <Navigate to="/" replace />
        )}
      </Main>

      <DivNovidades>
        <div
          className="subHeader">
          <h3 className="h3SubHeader">Tecnologias</h3>
          <button className="btnSubHeader" type="button" 
          onClick={() => setModalIn(true)} // CHAMA O MODAL P/ O USER POR OS DADOS => MODAL ADD
          >
            <MdAddComment className="iconSubHeader" />
          </button>
          <CreateTechnology/>
        </div>

        <div className="tagForm">
          <ul>
            {user.techs.length === 0 ? (
              <p>vazio</p>
            ) : (
              user.techs?.map((elem, index) => (
                <RenderAddTechnology key={index} userValue={elem} />
              ))
            )}            
          </ul>
        </div>
      </DivNovidades>
    </>
  );
};

export default Home;