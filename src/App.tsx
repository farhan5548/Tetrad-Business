import { useSelector } from "react-redux";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { RootState } from "./redux/store";

function App() {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <UserProfile /> : <Login />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
