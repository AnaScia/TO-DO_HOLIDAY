import CreateList from '../component/CreateList';
import Table from '../component/Table';

function Packing() {
  return (
    <>
      <h1>Packing</h1>
      <CreateList boton="create" column1="Item" column2="Packed" column3="Note">
        {/* le paso como children el input */}
        <input type="checkbox" className="input-packed"></input>
      </CreateList>
    </>
  );
}

export default Packing;
