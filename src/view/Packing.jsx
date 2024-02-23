import CreateList from '../component/CreateList';
import '../styles/packing.css';

function Packing() {
  const arrColumna = ['Item', 'Packed', 'Note'];
  return (
    <>
      <h1 className="title-packing">¿Que vas a llevar al viaje? </h1>
      <CreateList button="create" columns={arrColumna}>
        {/* le paso como children el input */}
        <input type="checkbox" className="input-packed"></input>
      </CreateList>
    </>
  );
}

export default Packing;
