import PropTypes from 'prop-types';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/table.css';
import { useState } from 'react';
import EditText from './EditText';

function Table({ save, setSave }) {
  const [modal, setModal] = useState(false);

  function handleDelete(indexItem) {
    const filterIndex = save.filter((item, index) => indexItem !== index);
    setSave(filterIndex);
  }

  function handleModal() {
    setModal(true);
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Packed</td>
            <td>Note</td>
          </tr>
        </thead>
        <tbody>
          {save.map((item, index) => (
            <tr key={index}>
              <td className="td_item">
                {modal === false ? item : modal && <EditText />}
              </td>
              <td className="td_packed">
                <div className="div_packed">
                  <input type="checkbox" className="input-packed"></input>

                  <button
                    className="button-packed"
                    onClick={() => handleModal()}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>

                  <button
                    onClick={() => handleDelete(index)}
                    className="button-packed"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </td>
              <td>
                <input className="notas-input" type="text"></input>
              </td>
            </tr>
          ))}
        </tbody>

        {/* {modal && <EditText />} */}
      </table>
    </div>
  );
}

Table.propTypes = {
  save: PropTypes.array,
  setSave: PropTypes.func,
};

export default Table;
