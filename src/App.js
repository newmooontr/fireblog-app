
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Login from "./pages/Login";
import NewBlog from "./pages/NewBlog";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import UpdateBlog from "./pages/UpdateBlog";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/details" element={<Details/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/newblog" element={<NewBlog/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/updateblog" element={<UpdateBlog/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
