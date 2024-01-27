import { useState } from 'react';
import Table from './Table';

function CreateList() {
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
          Create
        </button>
      </form>
      <div>
        <Table save={save} setSave={setSave} />
      </div>
    </div>
  );
}

export default CreateList;
