import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../../contexts/UserContexts";
import { Container, Overlay } from "./modalCreateTech.style.js";

const CreateTechnology = () => {
  const { createTechnology, modalIn, setModalIn } = useContext(UserContext);

  const { register, handleSubmit } = useForm({});

  return (
    <>
      {modalIn && (
        <Overlay onClick={() => setModalIn(false)}>
        <Container onClick={(event) => event.stopPropagation()} onSubmit={handleSubmit((data) => createTechnology(data))}> {/* AQUI O FORM PEGA OS VALUE DO USER E PASSA PARA A API, RETORNANDO O CADASTRO NA HOME */}
          <div>
            <h2>Cadastrar Tecnologia</h2>
            <button type="button"
              onClick={() => {
                setModalIn(false);
              }}
            >
              <IoClose />
            </button>
          </div>
          <label htmlFor="title" className="labelName">
            Nome da Tech
          </label>
          <input type="text" name="" id="title" {...register("title")} />
          <label htmlFor="status" className="labelStatus">
            Selecionar Status
          </label>
          <select
            id="status"
            {...register("status")}
            required="Escolha um Nível!"
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </Container>
        </Overlay>
      )}
    </>
  );
};

export default CreateTechnology;
