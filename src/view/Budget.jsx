import CreateList from '../component/CreateList';
import '../styles/createList.css';

function Budget() {
  return (
    <>
      <h1>Budget</h1>
      <CreateList
        boton="CREATE"
        column1="Item"
        column2="Edit/delete"
        column3="Price"
      />
    </>
  );
}

export default Budget;
