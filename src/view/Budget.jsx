import CreateList from '../component/CreateList';
import Input from '../component/Input';
import '../styles/budget.css';

function Budget() {
  const arrColumns = ['Item', 'Edit/Delete', 'Price'];
  return (
    <div>
      <div className="container-inputs">
        <Input name="Presupuesto" />
        <Input name="Restante" />
        <Input name="Gastado hasta ahora" />
      </div>
      <CreateList
        button="Save"
        columns={arrColumns}
        className="container-list"
      />
    </div>
  );
}

export default Budget;
