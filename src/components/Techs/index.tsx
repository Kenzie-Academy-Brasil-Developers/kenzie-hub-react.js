import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { ListTechnologies, MainContent } from "./style.Techs";
import { MdModeEditOutline } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";

const Technologies = () => {
  const { technologies, setNewTechnology, setEditTechnology, setIdTech } =
    useContext(UserContext);

  const teste = (event: any) => {
    setEditTechnology(true);
    let id = event.target.closest("li").id;
    setIdTech(id);
  };

  return (
    <MainContent>
      <div>
        <h3>Tecnologias</h3>
        <button onClick={() => setNewTechnology(true)}>
          <BiMessageSquareAdd />
        </button>
      </div>
      <ListTechnologies>
        {technologies.map((technology) => (
          <li key={technology.id} id={`${technology.id}`}>
            <h4>{technology.title}</h4>
            <div>
              <span>{technology.status}</span>
              <MdModeEditOutline onClick={(e) => teste(e)} />
            </div>
          </li>
        ))}
      </ListTechnologies>
    </MainContent>
  );
};
export default Technologies;