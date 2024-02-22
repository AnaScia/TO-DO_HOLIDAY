import CreateList from '../component/CreateList';
import Table from '../component/Table';

function Packing() {
  const arrColumna = ['Item', 'Packed', 'Note'];
  return (
    <>
      <h1>Packing</h1>
      <CreateList button="create" columns={arrColumna}>
        {/* le paso como children el input */}
        <input type="checkbox" className="input-packed"></input>
      </CreateList>
    </>
  );
}

export default Packing;
