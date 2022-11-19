
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
          <Route>
            <Route path="/newblog" element={<NewBlog/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/updateblog" element={<UpdateBlog/>}/>
            <Route path="/details" element={<Details/>}/>
          </Route>
          
            <Route path="/about" element={<About/>}/>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
