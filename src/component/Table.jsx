import PropTypes from 'prop-types';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Table({ save, setSave }) {
  function handleDelete(indexItem) {
    const filterIndex = save.filter((item, index) => indexItem !== index);
    setSave(filterIndex);
  }

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Packed</td>
            <td>Notas</td>
          </tr>
        </thead>
        <tbody>
          {save.map((item, index) => (
            <tr key={index}>
              <td>{item} </td>
              <td>
                <input type="checkbox"></input>
                <button onClick={() => handleDelete(index)}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
              <td>
                <input className="notas-input" type="text"></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Table.propTypes = {
  save: PropTypes.array,
  setSave: PropTypes.func,
};

export default Table;
