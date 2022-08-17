import { FaRegTrashAlt } from "react-icons/fa";
import { BiEditAlt } from "react-icons/bi";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContexts";
import { useState } from "react";
import ModifyTechnology from "../ModalModifyTech/index";

const RenderAddTechnology = ({ userValue }) => {
  const { DeleteTech } = useContext(UserContext);

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
        <BiEditAlt />
      </button>

      <button
        type="button"
        className="btnDelete"
        onClick={() => DeleteTech(userValue.id)}
      >
        <span>
          <FaRegTrashAlt />
        </span>
      </button>
    </li>
  );
};

export default RenderAddTechnology;
