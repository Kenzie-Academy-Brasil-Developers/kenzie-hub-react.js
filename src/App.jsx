import { Main } from "./app.style.js";
import RoutesMain from "./routes/index.jsx";

import "./App";
import { UserProvider } from "./contexts/UserContexts";

import { Toaster } from 'react-hot-toast'



function App() {
  return (
    <>
      <UserProvider>
        <Main>
          <Toaster/>
          <RoutesMain />
          </Main>
      </UserProvider>
    </>
  );
}

export default App;