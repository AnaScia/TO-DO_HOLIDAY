import { useState } from 'react';
import PropTypes from 'prop-types';

function EditText({ save, setSave, index, setChange }) {
  const [create, setCreate] = useState('');

  function handleInput(e) {
    e.preventDefault();
    setCreate(e.target.value);
  }

  function handleEdit(index) {
    const newArray = save.map((item, indexItem) => {
      if (index === indexItem) {
        return create;
      } else return item;
    });
    setSave(newArray);
    setChange(false);
  }

  return (
    <>
      <input
        type="text"
        name="edit"
        value={create}
        onChange={handleInput}
      ></input>

      <button onClick={() => handleEdit(index)}>Edit</button>
    </>
  );
}

EditText.propTypes = {
  save: PropTypes.array,
  setSave: PropTypes.func,
  index: PropTypes.number,
  setChange: PropTypes.func,
};

export default EditText;
