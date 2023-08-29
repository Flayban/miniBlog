import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { onAuthStateChanged } from "firebase/auth"

// hooks
import { useState, useEffect } from "react"
import { useAuthentication } from "./Hooks/useAuthentication"
//Context
import { AuthProvider } from './context/AuthContext'
//Pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import CreatPost from './pages/CreatPost/CreatPost'
import DashBoard from './pages/DashBoard/DashBoard'
import Search from './pages/Search/Search'

//Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"




function App() {

  const [user, setUser] = useState(undefined)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando</p>
  }

  return (
    <div className="Mini Blog">
      <AuthProvider value = {{user}}>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route path ='/' element={<Home/>} />
              <Route path ='/About' element={<About/>}/>
              <Route path ='/search' element={<Search/>}/>
              <Route path ='/Register' element={ !user ? <Register/> : <Navigate to = "/"/>} />
              <Route path ='/Login' element={ !user ? <Login/> : <Navigate to = "/"/>}/>
              <Route path ='/posts/creat' element={user ? <CreatPost/> : <Navigate to = "/Login"/>}/>              
              <Route path ='/dashboard' element={user ? <DashBoard/> : <Navigate to = "/Login"/>}/>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>      
    </div>
  );
}

export default App;
