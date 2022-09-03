import CrudForm from "./components/CrudForm";
import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
     <div className="">
      <Header title="Buscador de Personajes" />
     <CrudForm/>
     </div>

     <Footer msg=" Copyright © 2022 " />
    </>
  );
}

export default App;