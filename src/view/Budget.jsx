import CreateList from '../component/CreateList';
import '../styles/createList.css';

function Budget() {
  const arrColumns = ['Item', 'Edit/Delete', 'Price'];
  return (
    <>
      <h1>Budget</h1>
      <CreateList button="CREATE" columns={arrColumns} />
    </>
  );
}

export default Budget;
