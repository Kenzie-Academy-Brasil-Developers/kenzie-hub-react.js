import { Header, SectionIntro, SectionDesenvolvimento } from "./style.User";

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContexts";
import NewTechnology from "../CreateTech";
import Technologies from "../Techs";
import Loading from "../Loading";
import EditTechnology from "../EditTech";
import React from "react";

const User = () => {
  const { user, logout, loading, newTechnology, editTechnology } =
    useContext(UserContext);

  if (loading) return <Loading />;

  if (!user) return <Navigate replace to="/login" />;

  return (
    <>
      {editTechnology && <EditTechnology />}
      {newTechnology && <NewTechnology />}
      <>
        <Header>
          <h1>Kenzie Hub</h1>
          <button onClick={logout}>Sair</button>
        </Header>
        <SectionIntro>
          <div>
            <h2>Olá {user.name}</h2>
            <span>{user.course_module}</span>
          </div>
        </SectionIntro>
        <SectionDesenvolvimento>
          <Technologies />
        </SectionDesenvolvimento>
      </>
    </>
  );
};
export default User;