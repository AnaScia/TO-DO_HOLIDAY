import { useState } from 'react';
import Table from './Table';
import '../styles/createList.css';

function CreateList({ button, columns, children }) {
  const [create, setCreate] = useState('');

  const [save, setSave] = useState([]);

  function handleClick(e) {
    e.preventDefault();
    setCreate(e.target.value);
  }

  return (
    <div className="list-container">
      <form className="form-container">
        <input
          type="text"
          name="search"
          value={create}
          onChange={handleClick}
          className="input-form"
        ></input>
        <button
          className="form-button"
          onClick={(e) => {
            e.preventDefault();
            create === ''
              ? console.log('ingrese datos')
              : setSave([...save, create]);
          }}
        >
          {button}
        </button>
      </form>
      <div>
        <Table
          save={save}
          setSave={setSave}
          columns={columns}
          children={children}
        />
      </div>
    </div>
  );
}

export default CreateList;
