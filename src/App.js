import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main";
import SignUp from "./pages/signup/SignUp";
import SignIn from "./pages/signin/SignIn";
import Todo from "./pages/todo/Todo";
import PrivateRoute from "./util/PrivateRoute";
import AuthenticatedRoute from "./util/AuthenticatedRoute";
import "./assets/global.scss";
function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<AuthenticatedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
