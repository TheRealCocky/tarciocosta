import React from 'react';
import './App.css';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Business from "./Pages/Business.jsx";
import Contact from "./Pages/Contact.jsx";
import History from "./Pages/History.jsx";
import Navbar from "./Components/Navbar.jsx";
import Media from "./Pages/Media.jsx";
import Blog from "./Pages/Blog.jsx";
import Depoimentos from "./Pages/Depoimentos.jsx";
import ProjetoDetalhe from "./Components/ProjetoDetalhe.jsx";
import Servicos from "./Pages/Servicos.jsx";
import MediaAll from "./Components/MediaAll.jsx";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/business" element={<Business/>} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/depoimentos" element={<Depoimentos/>} />
                <Route path="/media" element={<Media/>} />
                <Route path="/blog" element={<Blog/>} />
                <Route path="/projetos/:id" element={<ProjetoDetalhe/>} />
                <Route path="/servicos" element={<Servicos/>} />
                <Route path="/media/todos" element={<MediaAll/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

