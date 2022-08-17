import { Main } from "./app.style.js";
import RoutesMain from "./routes/index.jsx";

import "./App";
import { UserContext } from "./contexts/UserContexts";


function App() {
  return (
    <>
      <UserContext>
        <Main>
          <RoutesMain />
          </Main>
      </UserContext>
    </>
  );
}

export default App;