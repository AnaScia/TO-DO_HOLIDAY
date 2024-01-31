import { useState } from 'react';
import PropTypes from 'prop-types';

function EditText() {
  const [create, setCreate] = useState('');

  function handleClick(e) {
    e.preventDefault();
    setCreate(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        name="edit"
        value={create}
        onChange={handleClick}
      ></input>
      <button
      // onClick={() => setSave([...save, create])}
      >
        Edit
      </button>
    </>
  );
}

EditText.propTypes = {
  save: PropTypes.array,
  setSave: PropTypes.func,
};

export default EditText;
