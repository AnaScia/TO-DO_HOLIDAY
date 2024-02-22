import PropTypes from 'prop-types';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/table.css';
import { useState } from 'react';
import EditText from './EditText';

function Table({ save, setSave, columns, children }) {
  const [change, setChange] = useState({ flag: false, index: null });

  function handleDelete(indexItem) {
    const filterIndex = save.filter((item, index) => indexItem !== index);
    setSave(filterIndex);
  }

  function handleChange(indexItem) {
    setChange({ ...change, flag: !change.flag, index: indexItem });
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <td key={column}>{column}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {save.map((item, index) => (
            <tr key={index}>
              <td className="td_item">
                {change.flag && change.index === index ? (
                  <EditText
                    save={save}
                    setSave={setSave}
                    index={index}
                    setChange={setChange}
                  />
                ) : (
                  item
                )}
              </td>
              <td className="td_packed">
                <div className="div_packed">
                  {children}
                  <button
                    className="button-packed"
                    onClick={() => handleChange(index)}
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

        {/* {change && <EditText />} */}
      </table>
    </div>
  );
}

Table.propTypes = {
  save: PropTypes.array,
  setSave: PropTypes.func,
};

export default Table;
