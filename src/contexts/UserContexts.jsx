import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router";
import api from "../api/api.js";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  
  const [user, setUser] = useState([]);

  const [loading, setLoading] = useState(true);

  const [modalIn, setModalIn] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@context-KenzieHub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");

          setUser(data);
        } catch (err) {
          console.log(err);
        }
      } else {
        navigate("/");
      }
      setLoading(false);
    }

    loadUser();
  }, []);

  const SignIn = async (data) => {

    const resp = await api.post("/sessions", data)
    .catch((err) => {
      toast.error("Erro ao efetuar Login!", {
        position: "top-right",
        autoClose: 5000,
      });
      console.log(err);
    });

    const { user: userResponse, token } = resp.data;

    api.defaults.headers.authorization = `Bearer ${token}`;

    setUser(userResponse);

    localStorage.setItem("@context-KenzieHub:token", token);

    const toNavigate = location.state?.state?.pathname || '/home'

    navigate(toNavigate, { replace: true });
  };

  const createTech = (data) => {

    api.post("/users/techs", data)
        .then((resp) => {
            console.log("response da tech", resp);
            const novaTech = [...user.techs, resp.data]
            setUser({ ...user, techs: novaTech })

            toast.success("Tecnologia cadastrada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
            });
            setModalIn(false)
        })
        .catch((err) => {
            toast.error("Tecnologia já cadastrada!", {
                position: "top-right",
                autoClose: 5000,
            });
            console.log("err CreateTechnology", err);
        });
}

  const DeleteTech = (id) => {
    setLoading(true)

    api.delete(`/users/techs/${id}`)
        .then((resp) => {
            console.log("CONSOLE LOG do respponse do Registro", resp);

            const newTechs = user.techs.filter((elem) => elem.id !== id)
            setUser({ ...user, techs: newTechs })

            toast.success("Tecnologia deletada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
            });
        })
        .catch((err) => {
            toast.error("Erro ao deletar!", {
                position: "top-right",
                autoClose: 5000,
            });
            console.log("err DeleteTechnology", err);
        })
        .finally(() => setLoading(false));
}

  const ModifyTech = (data, id) => {
    setLoading(true)

    const ModifyTec = user.techs.filter((elem) => elem.id !== id)

    api.put(`/users/techs/${id}`, data)
        .then((resp) => {
            console.log("CONSOLE LOG do respponse do Registro", resp);

            const newTechs = [...ModifyTec, resp.data]
            setUser({ ...user, techs: newTechs })

            toast.success("Tecnologia modificada com sucesso!", {
                position: "top-right",
                autoClose: 5000,
            });
        })
        .catch((err) => {
            toast.error("Erro ao modificar!", {
                position: "top-right",
                autoClose: 5000,
            });
            console.log("err ModifyTech", err);
        })
        .finally(() => setLoading(false));;
}

  return (
      <UserContext.Provider value={{
          user,
          SignIn,
          loading,
          modalIn,
          setModalIn,
          createTech,
          DeleteTech,
          ModifyTech
      }}>
      {children}
    </UserContext.Provider>
  );
};


