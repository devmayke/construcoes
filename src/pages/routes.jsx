import { Routes, Route, Link } from "react-router-dom";
import Home from "./home"
import Construcoes from "./construcoes"
import React from 'react'
import Servicos from "./servicos";
import QuemSomos from './quemsomos/index';
import Contato from './contato/index';
import User from './user/index';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/construcoes" element={<Construcoes/>} />
      <Route path="/servicos" element={<Servicos/>} />
      <Route path="/quemsomos" element={<QuemSomos />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/user" element={<User />} />

    </Routes>
  )
}

export default Router
