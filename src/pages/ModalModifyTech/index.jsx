import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { UserContext } from "../../contexts/UserContexts";
import { Container, Overlay } from "./modalModifyTech.style.js";


const ModifyTechnology = ({userValue, modalModify, setModalModify }) => {
  const { ModifyTech } = useContext(UserContext);

  const { register, handleSubmit } = useForm({});

  function ReceberNome(data, event) {
    event.preventDefault()
    ModifyTech(data, event.target.id)
  }

  return (
    <>
      {modalModify && (
        <Overlay onClick={() => setModalModify(false)}>
        <Container onClick={(event) => event.stopPropagation()} id={userValue.id} onSubmit={handleSubmit( ReceberNome)}> {/* AQUI O FORM PEGA OS VALUE DO USER E PASSA PARA A API, RETORNANDO O MODIFY NA HOME */}
          <div>
            <h2>Editar Tecnologia</h2>
            <button
            type="button"
              onClick={() => {
                setModalModify(false)
              }}
            >
              <IoClose />
            </button>
          </div>
          <label htmlFor="title" className="labelName">
            Nome da Tech
          </label>
          <input type="text" name="" id="title" defaultValue={userValue.title} disabled />
          <label htmlFor="status" className="labelStatus">
            Selecionar Status
          </label>
          <select
            id="status"
            {...register("status")}
            defaultValue={userValue.status}
            required="Escolha um Nível!"
          >
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Atualizar Tecnologia</button>
        </Container>
        </Overlay>
      )}
    </>
  );
};

export default ModifyTechnology;
