import PropTypes from 'prop-types';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/table.css';
import { useState } from 'react';
import EditText from './EditText';

function Table({ save, setSave, input, column1, column2, column3, children }) {
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
            <td>{column1}</td>
            <td>{column2}</td>
            <td>{column3}</td>
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
                  {/* <input type="checkbox" className="input-packed"></input> */}

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
