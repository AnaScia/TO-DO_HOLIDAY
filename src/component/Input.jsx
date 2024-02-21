import '../styles/input.css';

function Input({ name }) {
  return (
    <div className="input-div">
      <label htmlFor="Name">{name}</label>
      <input type="text" name="Name"></input>
    </div>
  );
}

export default Input;
