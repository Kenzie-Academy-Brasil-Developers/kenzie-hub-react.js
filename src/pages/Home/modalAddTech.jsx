import { FaRegTrashAlt } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { useState } from "react";
import ModifyTechnology from "../ModalModifyTech/index";

const RenderAddTechnology = ({ userValue }) => {
  const { DeleteTechnology } = useContext(UserContext);

  const [modalModify, setModalModify] = useState(false);

  return (
    <li>
      <ModifyTechnology
        modalModify={modalModify}
        setModalModify={setModalModify}
        userValue={userValue}
      />
      <h3 className="tagH3">{userValue.title}</h3>
      <p>{userValue.status}</p>
      <button
        className="btnModify"
        type="button"
        onClick={() => setModalModify(true)}
      >
        <BsArrowRepeat />
      </button>

      <button
        type="button"
        className="btnDelete"
        onClick={() => DeleteTechnology(userValue.id)}
      >
        <FaRegTrashAlt />
      </button>
    </li>
  );
};

export default RenderAddTechnology;
