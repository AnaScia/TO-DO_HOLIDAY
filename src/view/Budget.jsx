import CreateList from '../component/CreateList';
import '../styles/createList.css';
import Input from '../component/Input';

function Budget() {
  return (
    <>
      <h1>My Budget Planner/ Mi Presupuesto</h1>
      <div className="budget-inputs">
        <Input name="Presupuesto:" />
        <Input name="Restante:" />
        <Input name="Gastado hasta ahora:" />
      </div>
      <CreateList
        boton="Save"
        column1="Item"
        column2="Edit/delete"
        column3="Price"
      />
    </>
  );
}

export default Budget;
