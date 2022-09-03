import { useState } from "react";
import { nanoid } from "nanoid";
import { BaseColaboradores } from "../components/Colaboradores";
import Search from "../components/Search";

const CrudForm = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [task, setTask] = useState(BaseColaboradores);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      alert("Favor completa los datos solicitados");
      return;
    }

    setTask([...task, { id: nanoid(), name: user, Email: email }]);
    setUser("");
    setEmail("");
  };

  return (
    <>
      <div className="main-container">
        <div id="search">
          <Search tasks={task} setTask={setTask} />
        </div>
        <section>
          <div>
            <h1 className='add'>Agregar Personaje</h1>
          </div>
          <div id="add">
            <h4>Nombre</h4>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese nombre"
                onChange={(e) => setUser(e.target.value)}
                value={user}
              />
              <h4>Correo</h4>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Ingrese correo"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <br />
              <input className="submit" id="button" type="submit" value="Enviar" />
            </form>
          </div>
        </section>

      </div>

      <div id="users" className="actualUsers">
        <div className="lista">
          <h2>Lista de Personajes</h2>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
            {task.map((el) => (
              <tr key={el.id}>
                <td>{el.name}</td>
                <td>{el.Email}</td>
              </tr>
            ))}
            {users.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.Email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



    </>
  );
};
export default CrudForm;