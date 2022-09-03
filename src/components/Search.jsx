import { useState } from "react";

const Search = (props) => {
  const [search, setSearch] = useState("");
  const [print, setPrint] = useState([]);
  const searchTask = (e) => {
    e.preventDefault();
    const fTask = props.tasks.filter((task) => task.name == search);
    setPrint(fTask);
    setSearch("");
  };
  return (
    <div className="printContainer">
      <header>
        <form onSubmit={searchTask}>
          <input
            type="search"
            placeholder="Búsqueda"
            onChange={(e) => setSearch(e.target.value)}
          />
          <br />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <div id="print">
        {print
          ? print.map((data) => (
            <ul key={data.id}>
              <h3>Resultado</h3>
              <li>{data.name} - {data.Email}</li>
            </ul>
          ))
          : null}
      </div>
    </div>
  );
};

export default Search;