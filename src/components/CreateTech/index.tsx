import { FundoModal, ModalCreateTechnology } from "../style.CreateTech";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { UserContext, IUserCreateTechnology } from "../../contexts/UserContexts";
import { useForm } from "react-hook-form";
import React from "react";

const NewTechnology = () => {
  const { setNewTechnology, createTech } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IUserCreateTechnology>();

  return (
    <FundoModal>
      <ModalCreateTechnology onSubmit={handleSubmit(createTech)}>
        <div className="divTop">
          <h3>Cadastrar Tecnologia</h3>
          <button onClick={() => setNewTechnology(false)}>
            <AiOutlineClose />
          </button>
        </div>

        <div className="divContent">
          <label htmlFor="title-technology">Nome</label>
          <input
            type="text"
            placeholder="Nova Tecnologia"
            {...register("title")}
          />

          <label htmlFor="status">Selecionar status</label>
          <select id="status" placeholder="Status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediario</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="submit">Cadastrar Tecnologia</button>
        </div>
      </ModalCreateTechnology>
    </FundoModal>
  );
};

export default NewTechnology;
