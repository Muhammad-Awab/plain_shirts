import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import LandingPage from "./components/Landing_page";
import AdminPanel from "./components/Admin/AdminPanel";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			{/* <Route path="/" exact element={<LandingPage/>} /> */}
			<Route path="/" exact element={<AdminPanel/>} />
		</Routes>
	);
}

export default App;
