import { useState } from 'react';
import Table from './Table';
import '../styles/createList.css';

function CreateList({ boton, column1, column2, column3, children }) {
  const [create, setCreate] = useState('');

  const [save, setSave] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setCreate(e.target.value);
  }

  return (
    <div className="list-container">
      <form>
        <input
          type="text"
          name="search"
          value={create}
          onChange={handleClick}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            create === ''
              ? console.log('ingrese datos')
              : setSave([...save, create]);
          }}
        >
          {boton}
        </button>
      </form>
      <div>
        <Table
          save={save}
          setSave={setSave}
          column1={column1}
          column2={column2}
          column3={column3}
          children={children}
        />
      </div>
    </div>
  );
}

export default CreateList;
