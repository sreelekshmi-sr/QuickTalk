import {Routes,Route,Navigate} from "react-router-dom"
import { Chat, Login, Register } from "./pages/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import { NavBar } from "./components/NavBar";
function App() {
  return (
    <>
    <NavBar/>
  <Container className="black">
  <Routes>
    <Route path="/" element ={<Chat/>}/>
    <Route path="/register" element ={<Register/>}/>
    <Route path="/login" element ={<Login/>}/>
    <Route path="*" element ={<Navigate to ="/"/>}/>
  </Routes>
  </Container>
  </>
  )
}

export default App
